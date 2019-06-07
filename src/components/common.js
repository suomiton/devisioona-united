import styled from "styled-components"
import media from "../utils/media"

export const WidthWrapper = styled.div`
  max-width: ${({ theme }) => theme.screen.desktop}px;
  margin-left: auto;
  margin-right: auto;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const InlineListItem = styled.li`
  display: block;
  padding: 8px 15px;

  ${media.desktop`
    display: inline-block;
    margin: 0 5px;
    padding: 0;
  `}
`

export const Heading = styled.h1`
  font-size: 32px;
  line-height: 1.45;
  font-weight: 300;
  margin: 20px 0;

  & + h2 {
    margin-top: -20px;
  }
`

export const SubHeading = styled.h2`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 300;
  margin: 20px 0;
`

export const UnStyledButton = styled.button`
  border: 0 none;
  outline: none;
  box-shadow: none;
  background-color: transparent;

  &:focus {
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
`
