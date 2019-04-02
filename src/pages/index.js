import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "front.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
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
          keywords={[`devisioona`, `jalkapallo`]}
        />
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Layout>
    )}
  />
)

export default IndexPage
