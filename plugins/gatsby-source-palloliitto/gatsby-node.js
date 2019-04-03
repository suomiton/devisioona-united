const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Convert the options object into a query string
  // const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Pixabay API URL
  const apiUrl = configOptions.gamesScheduleUrl
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.text()) // response.body())
      // Process the JSON data into a node
      .then(data => {
        // For each query result (or 'hit')
        // data.hits.forEach(photo => {
        //   console.log("Photo data is:", photo)
        // })
        console.log(data)
      })
  )
}
