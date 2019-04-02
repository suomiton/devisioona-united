import styled from "styled-components"

export const WidthWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
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
