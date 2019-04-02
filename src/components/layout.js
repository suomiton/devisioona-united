/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Reset from "../utils/reset"
import Typography from "../utils/typography"
import Theme from "../utils/theme"
import Header from "./header"

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Typography}
`

const ContentWrapper = styled.main``

const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <ContentWrapper>{children}</ContentWrapper>
          <footer>
            © {new Date().getFullYear()},{" "}
            <a href="https://www.devisioona.fi">Devisioona</a>
          </footer>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
