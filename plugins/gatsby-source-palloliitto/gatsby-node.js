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

  const calcPoints = (winsStr, drawsStr) => {
    const wins = parseInt(winsStr)
    const draws = parseInt(drawsStr)

    return wins * 3 + draws * 1
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
        const points = calcPoints(wins, draws)

        return {
          team,
          played,
          wins,
          draws,
          losses,
          points,
        }
      })
    )
    const result = {
      competitionName,
      groupName,
      teams: teams.slice(1),
    }
    return result
  }

  const parsePlayerStatsTable = html => {
    const $table = $("table", html)
    const players = Array.from(
      $table.find("tbody tr").map((_, tr) => {
        const number = chTxt(tr, ".jersey")
        const name = chTxt(tr, ".player")
        const matches = chTxt(tr, ".match")
        const goals = chTxt(tr, ".goal")
        const yellowCards = chTxt(tr, ".yellowcard")
        const redCards = chTxt(tr, ".redcard")

        return {
          number, name, matches, goals, yellowCards, redCards
        }
      })
    )

    return { players }
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

  const fetchPlayerStatsTable = url =>
    createPLNode(
      url,
      "palloliitto-playerstats-table",
      "PalloliittoPlayerStatsTable",
      parsePlayerStatsTable
    )

  const { gamesScheduleUrl, scoreTableUrl, playerStatsUrl } = configOptions

  return Promise.all([
    fetchGamesSchedule(gamesScheduleUrl),
    fetchScoreTable(scoreTableUrl),
    fetchPlayerStatsTable(playerStatsUrl),
  ])
}
