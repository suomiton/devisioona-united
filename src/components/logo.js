import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-flow: row nowrap;

  > a {
    flex: 0 0 230px;
    width: 230px;
  }
`

const SiteTitle = styled.div`
  flex: 1 0 auto;
  padding: 15px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 32px;
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "devisioona-united-icon.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 230) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const Logo = ({ siteTitle }) => (
  <LogoWrapper>
    <Link to="/">
      <LogoImage />
    </Link>
    <SiteTitle>{siteTitle}</SiteTitle>
  </LogoWrapper>
)

export default Logo
