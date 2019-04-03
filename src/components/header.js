import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import { WidthWrapper } from "./common"
import MainMenu from "./mainmenu"

const HeaderWrapper = styled.header`
  position: relative;
  height: 200px;
  z-index: 1;
`

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.grey};
  bottom: 0;
  left: 0;
`

const ContentWrapper = styled(WidthWrapper)`
  position: relative;
  height: 100%;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <ContentWrapper>
        <Logo siteTitle={siteTitle} />
        <MainMenu />
      </ContentWrapper>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
