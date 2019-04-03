import styled from "styled-components"

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
  display: inline-block;
  margin: 0 5px;
`

export const Heading = styled.h1`
  font-size: 32px;
  line-height: 1.45;
  font-weight: 300;
  margin: 20px 0;
`
