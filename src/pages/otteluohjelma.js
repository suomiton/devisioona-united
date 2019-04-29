import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitLayout from "../components/split-layout"
import { Heading } from "../components/common"

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  > tbody {
    > tr {
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
`

const TableRow = styled.tr``

const TableHeader = styled.th`
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 4px solid #ddd;
  text-align: left;
`

const TableColumn = styled.td`
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 300;
`

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
                points
              }
            }
          }
        `}
        render={data => {
          const { matches } = data.palloliittoGamesSchedule
          const scoreTable = data.palloliittoScoreTable

          return (
            <Layout>
              <SEO title="Otteluohjelma | Devisioona United" />
              <SplitLayout
                image={data.placeholderImage.childImageSharp.fluid.src}
              >
                <Heading>Otteluohjelma - Kausi 2019</Heading>
                <Table>
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
                </Table>

                <Heading>
                  Sarjataulukko - {scoreTable.competitionName} -{" "}
                  {scoreTable.groupName}
                </Heading>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeader>Joukkue</TableHeader>
                      <TableHeader>Ottelut</TableHeader>
                      <TableHeader>Voitot</TableHeader>
                      <TableHeader>Tasapelit</TableHeader>
                      <TableHeader>Häviöt</TableHeader>
                      <TableHeader>Pisteet</TableHeader>
                    </TableRow>
                  </thead>
                  <tbody>
                    {scoreTable.teams.map((t, idx) =>
                      this.renderScoreTableRow(t, idx)
                    )}
                  </tbody>
                </Table>
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

  renderScoreTableRow(team, idx) {
    return (
      <TableRow key={idx}>
        <TableColumn>{team.team}</TableColumn>
        <TableColumn>{team.played}</TableColumn>
        <TableColumn>{team.wins}</TableColumn>
        <TableColumn>{team.draws}</TableColumn>
        <TableColumn>{team.losses}</TableColumn>
        <TableColumn>{team.points}</TableColumn>
      </TableRow>
    )
  }
}

export default OtteluohjelmaPage
