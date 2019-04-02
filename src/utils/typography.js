import { css } from "styled-components"

const Typography = css`
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600,900");

  body {
    font: 100%/1.618 ${props => props.theme.fonts.primary};
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
    color: ${props => props.theme.colors.pink};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default Typography
