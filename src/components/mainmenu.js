import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { UnorderedList, InlineListItem } from "./common"

const MainMenuWrapper = styled.div`
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
        <MenuLink to="/devisioona">Devisioona?</MenuLink>
      </InlineListItem>
      <InlineListItem>
        <MenuLink to="/kokoonpano">Kokoonpano</MenuLink>
      </InlineListItem>
      <InlineListItem>
        <MenuLink to="/otteluohjelma">Otteluohjelma</MenuLink>
      </InlineListItem>
      <InlineListItem>
        <MenuLink to="/ota-yhteytta">Ota yhteyttä</MenuLink>
      </InlineListItem>
    </UnorderedList>
  </MainMenuWrapper>
)

export default MainMenu
