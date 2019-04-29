const fetch = require("node-fetch")
const $ = require("cheerio")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const toNodeData = (data, id, type) => {
    const content = JSON.stringify(data)
    const nodeData = Object.assign({}, data, {
      id: createNodeId(id),
      parent: null,
      children: [],
      internal: {
        type,
        content,
        contentDigest: createContentDigest(data),
      },
    })
    return nodeData
  }

  const createPLNode = (url, id, type, parser) => {
    return (
      // Fetch a response from the apiUrl
      fetch(url)
        // Parse the response as JSON
        .then(response => response.text())
        // Process the JSON data into a node
        .then(rawData => {
          const html = rawData.slice(16, rawData.length - 3)
          const data = parser(html)
          const nodeData = toNodeData(data, id, type)
          createNode(nodeData)
        })
    )
  }

  const chTxt = (el, exp) =>
    $(el)
      .find(exp)
      .text()

  const parseGamesSchedule = html => {
    const $table = $("table", html)
    const matches = Array.from(
      $table.find("tr").map((_, tr) => {
        const match = chTxt(tr, ".match")
        const date = chTxt(tr, ".date")
        const time = chTxt(tr, ".time")
        const pitch = chTxt(tr, ".pitch")
        const home = chTxt(tr, ".home")
        const away = chTxt(tr, ".away")
        const score = chTxt(tr, ".score")
        return {
          match,
          date,
          time,
          pitch,
          home,
          away,
          score,
        }
      })
    )
    const result = {
      matches: matches.slice(1),
    }
    return result
  }

  const parseScoreTable = html => {
    const $table = $("table", html)
    const competitionName = $table.find("caption > .competitionname").text()
    const groupName = $table.find("caption > .groupname").text()
    const teams = Array.from(
      $table.find("tr").map((_, tr) => {
        const team = chTxt(tr, ".team")
        const played = chTxt(tr, ".played")
        const wins = chTxt(tr, ".wins")
        const draws = chTxt(tr, ".draws")
        const losses = chTxt(tr, ".losses")
        return {
          team,
          played,
          wins,
          draws,
          losses,
        }
      })
    )
    const result = {
      competitionName,
      groupName,
      teams,
    }
    return result
  }

  const fetchGamesSchedule = url =>
    createPLNode(
      url,
      "palloliitto-games-schedule",
      "PalloliittoGamesSchedule",
      parseGamesSchedule
    )

  const fetchScoreTable = url =>
    createPLNode(
      url,
      "palloliitto-score-table",
      "PalloliittoScoreTable",
      parseScoreTable
    )

  const { gamesScheduleUrl, scoreTableUrl } = configOptions

  return Promise.all([
    fetchGamesSchedule(gamesScheduleUrl),
    fetchScoreTable(scoreTableUrl),
  ])
}
