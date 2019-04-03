import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WidthWrapper } from "../components/common"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "front.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Devisioona United"
          keywords={[`devisioona`, `jalkapallo`, "ohjelmisto", "konsultit"]}
        />
        <WidthWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </WidthWrapper>
      </Layout>
    )}
  />
)

export default IndexPage
