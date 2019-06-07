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

  ${media.tablet`
    flex-flow: row nowrap;
    margin: 30px auto;
  `}
`

const ContentWrapper = styled.section`
  flex: 0 0 100%;
  align-self: center;
  padding: 60px 45px 60px 45px;

  ${media.tablet`
    flex: 0 0 80%;
    background-color: rgba(255, 255, 255, 0.96);
    position: relative;
    margin-top: 45px;
    margin-bottom: 45px;
    z-index: 2;
    box-shadow: 30px 30px 40px -20px #333;
    margin-right: -30%;
  `}

  ${media.desktop1200`
    flex: 0 0 60%;
    margin-right: -10%;
  `}
`

const ImageWrapper = styled.section`
  flex: 1 1 100%;
  background-image: ${props => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;

  ${media.tablet`
    height: auto;
    min-width: 768px;
    margin-left: -10%;
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
