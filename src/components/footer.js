import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.greyDarker};
  padding: 30px;
  height: 195px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  width: 100%;
`

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;
`

const TextWrapper = styled.p`
  color: #fff;
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo-pysty-fff.png" }) {
          childImageSharp {
            fixed(width: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <FooterWrapper>
        <ImageWrapper>
          <Img
            fixed={data.placeholderImage.childImageSharp.fixed}
            alt="Devisioona Oy"
          />
        </ImageWrapper>
        <TextWrapper>Digitaalisuuden voimala</TextWrapper>
      </FooterWrapper>
    )}
  />
)

export default Footer
