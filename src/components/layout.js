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
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Typography}
`

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const ContentWrapper = styled.main`
  flex-grow: 1;
`

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
          <SiteWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
          </SiteWrapper>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
