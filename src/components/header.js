import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import { WidthWrapper, UnorderedList, InlineListItem } from "./common"

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

const MainMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-content: center;
  height: 100%;

  > ul {
    flex: 0 0 auto;
    align-self: center;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <ContentWrapper>
        <Logo siteTitle={siteTitle} />
        <MainMenu>
          <UnorderedList>
            <InlineListItem>
              <Link to="/devisioona">Devisioona?</Link>
            </InlineListItem>
            <InlineListItem>
              <Link to="/kokoonpano">Kokoonpano</Link>
            </InlineListItem>
            <InlineListItem>
              <Link to="/otteluohjelma">Otteluohjelma</Link>
            </InlineListItem>
            <InlineListItem>
              <Link to="/ota-yhteytta">Ota yhteyttä</Link>
            </InlineListItem>
          </UnorderedList>
        </MainMenu>
      </ContentWrapper>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
