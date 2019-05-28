import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WidthWrapper } from "../components/common"
import { Heading } from "../components/common"

const HeroImage = styled.div`
  max-width: 1920px;
  background-image: ${props => `url(${props.image})`};
  width: 100%;
  height: calc(300px + 20vw);
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  padding: 30px;
  text-align: center;
`

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "front.jpg" }) {
          childImageSharp {
            fixed(width: 1600, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      const { fixed } = data.placeholderImage.childImageSharp
      return (
        <Layout>
          <SEO
            title="Devisioona United"
            keywords={[`devisioona`, `jalkapallo`, "ohjelmisto", "konsultit"]}
          />

          <HeroImage image={fixed.src} />

          <WidthWrapper>
            <ContentWrapper>
              <Heading>
                Devisioona United koostuu alan johtavista ohjelmistoalan
                konsulteista
              </Heading>
              <p>
                Devisioona United pelaa kuningasjalkapalloa Miehet 5vs5
                harrastesarjassa.
              </p>
            </ContentWrapper>
          </WidthWrapper>
        </Layout>
      )
    }}
  />
)

export default IndexPage
