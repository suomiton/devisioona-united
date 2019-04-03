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
          }
        `}
        render={data => (
          <Layout>
            <SEO title="Otteluohjelma | Devisioona United" />
            <SplitLayout image={data.placeholderImage.childImageSharp.fluid}>
              <Heading>Otteluohjelma - Kausi 2019</Heading>
            </SplitLayout>
          </Layout>
        )}
      />
    )
  }
}

export default OtteluohjelmaPage