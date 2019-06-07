import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitLayout from "../components/split-layout"
import { Heading } from "../components/common"

const RosterWrapper = styled.section``

const GridRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  font-size: 14px;
  font-weight: 300;

  &.heading {
    font-weight: 600;
    border-bottom: 4px solid #ddd;
  }

  &:hover {
    background-color: #f6f6f6;
  }
`

const GridColumn = styled.div`
  flex: 0 1 100%;
  align-self: flex-start;
  padding: 6px 12px;
  text-align: right;
`

const PlayerNumber = styled(GridColumn)`
  flex: 0 0 45px;
`
const PlayerName = styled(GridColumn)`
  text-align: left;
  flex: 1 1 150px;
`
const PlayerMatches = styled(GridColumn)`
  flex: 0 0 100px;
`
const PlayerGoals = styled(GridColumn)`
  flex: 0 0 100px;
`
const PlayerYellowCards = styled(GridColumn)`
  flex: 0 0 100px;
`
const PlayerRedCards = styled(GridColumn)`
  flex: 0 0 100px;
`

class KokoonpanoPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "kokoonpano.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1440, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            palloliittoPlayerStatsTable {
              players {
                number
                name
                matches
                goals
                yellowCards
                redCards
              }
            }
          }
        `}
        render={data => {
          const { players } = data.palloliittoPlayerStatsTable
          return (
            <Layout>
              <SEO
                title="Joukkueen kokoonpano | Devisioona United"
                description="Devisioona United jalkapallojoukkueen kokoonpano"
                keywords={["devisioona", "jalkapallo", "joukkue", "kokoonpano"]}
              />
              <SplitLayout
                image={data.placeholderImage.childImageSharp.fluid.src}
              >
                <Heading>Kokoonpano - Kausi 2019</Heading>
                <RosterWrapper>
                  <GridRow className="heading">
                    <PlayerNumber>#</PlayerNumber>
                    <PlayerName>Nimi</PlayerName>
                    <PlayerMatches>Ottelut</PlayerMatches>
                    <PlayerGoals>Maalit</PlayerGoals>
                    <PlayerYellowCards>Keltaiset</PlayerYellowCards>
                    <PlayerRedCards>Punaiset</PlayerRedCards>
                  </GridRow>
                  {players
                    .sort(this.sortByGoals)
                    .map(p => this.renderPlayerRow(p))}
                </RosterWrapper>
              </SplitLayout>
            </Layout>
          )
        }}
      />
    )
  }

  sortByGoals = (a, b) => b.goals - a.goals

  renderPlayerRow = player => (
    <GridRow key={player.number}>
      <PlayerNumber>{player.number}</PlayerNumber>
      <PlayerName>{player.name}</PlayerName>
      <PlayerMatches>{player.matches}</PlayerMatches>
      <PlayerGoals>{player.goals}</PlayerGoals>
      <PlayerYellowCards>{player.yellowCards}</PlayerYellowCards>
      <PlayerRedCards>{player.redCards}</PlayerRedCards>
    </GridRow>
  )
}

export default KokoonpanoPage
