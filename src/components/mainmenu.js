import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import media from "../utils/media"
import Theme from "../utils/theme"
import { UnorderedList, InlineListItem, UnStyledButton } from "./common"
import HamburgerIcon from "./hamburgericon"
import CloseIcon from "./closeicon"

const MainMenuWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  left: 0;
  top: 0;
  display: ${props => (props.isVisible ? "flex" : "none")};
  flex-flow: column nowrap;
  justify-content: space-around;
  align-content: center;

  ${media.desktop`
    display: flex;
    position: static;
    flex-flow: row nowrap;
    background-color: transparent;
    justify-content: flex-end;
    align-content: center;
    height: 100%;
    margin-right: 20px;
  `}
`

const MenuList = styled(UnorderedList)`
  flex: 0 0 auto;
  ${media.desktop`
    align-self: center;
    overflow: hidden;
  `}
`

const MenuLinkItem = styled(InlineListItem)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 15px;
  ${media.desktop`
    width: auto;
  `}
`

const MenuLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -1px;
`

const MobileMenu = styled(UnStyledButton)`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  ${media.desktop`
    display: none;
  `}
`

const CloseMobileMenu = styled(UnStyledButton)`
  position: absolute;
  top: 15px;
  right: 15px;

  ${media.desktop`
    display: none;
  `}
`

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
    }
  }

  render() {
    const { menuVisible } = this.state
    return (
      <>
        <MainMenuWrapper isVisible={menuVisible}>
          <MenuList>
            <MenuLinkItem>
              <MenuLink to="/otteluohjelma">Otteluohjelma</MenuLink>
            </MenuLinkItem>
            <MenuLinkItem>
              <MenuLink to="/kokoonpano">Kokoonpano</MenuLink>
            </MenuLinkItem>
            <MenuLinkItem>
              <MenuLink to="/devisioona">Devisioona?</MenuLink>
            </MenuLinkItem>
            <MenuLinkItem>
              <MenuLink to="/ota-yhteytta">Ota yhteyttä</MenuLink>
            </MenuLinkItem>
          </MenuList>
          <CloseMobileMenu onClick={this.onToggleMenu}>
            <CloseIcon color={Theme.colors.green} />
          </CloseMobileMenu>
        </MainMenuWrapper>
        <MobileMenu onClick={this.onToggleMenu} isVisible={!menuVisible}>
          <HamburgerIcon color={Theme.colors.green} />
        </MobileMenu>
      </>
    )
  }

  onToggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible })
}

export default MainMenu
