import { css } from "styled-components"

export const mediaBreakpoints = {
  desktop: 1000,
  desktop1200: 1200,
  desktop1440: 1440,
  phone: 375,
  phone320: 320,
  phone560: 560,
  tablet: 768,
}

// iterate through the sizes and create a media template
const media = Object.keys(mediaBreakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = mediaBreakpoints[label] / 16
  accumulator[label] = function(...args) {
    return css`
      @media (min-width: ${emSize}em) {
        ${css.call(this, ...args)};
      }
    `
  }
  return accumulator
}, {})

export default media
