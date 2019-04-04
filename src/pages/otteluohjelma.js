import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitLayout from "../components/split-layout"
import { Heading } from "../components/common"

class OtteluohjelmaPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "otteluohjelma.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1440, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            palloliittoGamesSchedule {
              id
              matches {
                match
                date
                time
                pitch
                home
                away
                score
              }
            }
            palloliittoScoreTable {
              competitionName
              groupName
              teams {
                team
                played
                wins
                draws
                losses
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <SEO title="Otteluohjelma | Devisioona United" />
            <SplitLayout image={data.placeholderImage.childImageSharp.fluid}>
              <Heading>Otteluohjelma - Kausi 2019</Heading>
              <table>
                <thead>
                  <tr>
                    <th>Nro</th>
                    <th>Pvm</th>
                    <th>Klo</th>
                    <th>Kenttä</th>
                    <th>Nro</th>
                    <th>Nro</th>
                    <th>Nro</th>
                  </tr>
                </thead>
                <tr>
                  <td>{data.palloliittoGamesSchedule.matches[1].pitch}</td>
                </tr>
              </table>
            </SplitLayout>
          </Layout>
        )}
      />
    )
  }
}

export default OtteluohjelmaPage
