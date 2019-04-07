import { css } from "styled-components"

const Typography = css`
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600,900");

  body {
    font: 100%/1.618 ${props => props.theme.fonts.primary};
    overflow-x: hidden;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0 20px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: ${props => props.theme.colors.linkGrey};
    }
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      color: ${props => props.theme.colors.green};
    }
  }
`

export default Typography
