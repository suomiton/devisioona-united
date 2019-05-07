import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import { WidthWrapper } from "./common"
import MainMenu from "./mainmenu"
import media from "../utils/media"

const HeaderWrapper = styled.header`
  position: relative;
  height: 100px;
  z-index: 1;

  ${media.tablet`
    height: 200px;
  `}
`

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.grey};
  bottom: 0;
  left: 0;

  ${media.tablet`
    height: 100px;
  `}
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
