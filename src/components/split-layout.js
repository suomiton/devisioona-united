import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import media from "../utils/media"

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  position: relative;
  max-width: 1900px;

  ${media.desktop1440`
    flex-flow: row nowrap;
    margin: 30px auto;
  `}
`

const ContentWrapper = styled.section`
  flex: 0 0 100%;
  align-self: center;
  padding: 60px 20px 60px 20px;

  ${media.desktop1440`
    flex: 0 0 50%;
  `}
`

const ImageWrapper = styled.section`
  flex: 1 1 100%;
  background-image: ${props => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 5px 8px -3px #000;
  height: 450px;

  ${media.desktop1440`
    height: auto;
  `}
`

const SplitLayout = ({ image, children }) => (
  <ContentContainer>
    <ContentWrapper className="content">{children}</ContentWrapper>
    <ImageWrapper image={image} />
  </ContentContainer>
)

SplitLayout.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
}

export default SplitLayout
