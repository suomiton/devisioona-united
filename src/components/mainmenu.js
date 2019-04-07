import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import media from "../utils/media"
import { UnorderedList, InlineListItem } from "./common"

const MainMenuWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-content: center;
  height: 100%;
  margin-right: 20px;

  > ul {
    flex: 0 0 auto;
    align-self: center;
    height: 0;
    overflow: hidden;

    ${media.tablet`
      height: auto;
    `}
  }
`

const MenuLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -1px;
`

const MainMenu = () => (
  <MainMenuWrapper>
    <UnorderedList>
      <InlineListItem>
        <MenuLink to="/otteluohjelma">Otteluohjelma</MenuLink>
      </InlineListItem>
      <InlineListItem>
        <MenuLink to="/kokoonpano">Kokoonpano</MenuLink>
      </InlineListItem>
      <InlineListItem>
        <MenuLink to="/devisioona">Devisioona?</MenuLink>
      </InlineListItem>
      <InlineListItem>
        <MenuLink to="/ota-yhteytta">Ota yhteyttä</MenuLink>
      </InlineListItem>
    </UnorderedList>
  </MainMenuWrapper>
)

export default MainMenu
