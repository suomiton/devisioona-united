module.exports = {
  siteMetadata: {
    title: `Devisioona United`,
    description: `Devisioona United jalkapallojoukkue koostuu alan johtavista ohjelmistoalan konsulteista.`,
    author: `@Devisioona`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/devisioona-united-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-palloliitto",
      options: {
        gamesScheduleUrl:
          "https://www.palloliitto.fi/torneopal/ajax/[torneopal:team_schedule:team=133797%26amp;season=2019%26amp;key=A4YDZ6FZ2M]",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
