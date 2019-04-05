import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitLayout from "../components/split-layout"
import { Heading } from "../components/common"

const TableRow = styled.tr``

const TableHeader = styled.th``

const TableColumn = styled.td``

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
        render={data => {
          const { matches } = data.palloliittoGamesSchedule

          return (
            <Layout>
              <SEO title="Otteluohjelma | Devisioona United" />
              <SplitLayout image={data.placeholderImage.childImageSharp.fluid}>
                <Heading>Otteluohjelma - Kausi 2019</Heading>
                <table>
                  <thead>
                    <TableRow>
                      <TableHeader>Pvm</TableHeader>
                      <TableHeader>Kenttä</TableHeader>
                      <TableHeader>Koti</TableHeader>
                      <TableHeader>Vieras</TableHeader>
                      <TableHeader>Tulos</TableHeader>
                    </TableRow>
                  </thead>
                  <tbody>
                    {matches.map((m, idx) =>
                      this.renderGameScheduleRow(m, idx)
                    )}
                  </tbody>
                </table>
              </SplitLayout>
            </Layout>
          )
        }}
      />
    )
  }

  renderGameScheduleRow(match, idx) {
    return (
      <TableRow key={idx}>
        <TableColumn>
          {match.date} {match.time}
        </TableColumn>
        <TableColumn>{match.pitch}</TableColumn>
        <TableColumn>{match.home}</TableColumn>
        <TableColumn>{match.away}</TableColumn>
        <TableColumn>{match.score}</TableColumn>
      </TableRow>
    )
  }
}

export default OtteluohjelmaPage
