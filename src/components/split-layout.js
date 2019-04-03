import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { WidthWrapper } from "./common"

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-content: flex-start;
`

const ColumnWrapper = styled.section`
  flex: 0 1 50%;
  align-self: center;
  overflow: hidden;

  > .image {
    position: relative;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const SplitLayout = ({ image, children }) => (
  <WidthWrapper>
    <ContentWrapper>
      <ColumnWrapper className="content">{children}</ColumnWrapper>
      <ColumnWrapper className="image">
        <Img fluid={image} />
      </ColumnWrapper>
    </ContentWrapper>
  </WidthWrapper>
)

SplitLayout.propTypes = {
  image: PropTypes.object,
  children: PropTypes.node,
}

export default SplitLayout
