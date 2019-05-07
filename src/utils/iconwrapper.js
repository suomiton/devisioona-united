import React from "react"

const IconWrapper = ({ props, children }) => <svg {...props}>{children}</svg>

IconWrapper.defaultProps = {
    width: '32px',
    heigth: '32px',
    viewBox: '0 0 32 32'
}

export default IconWrapper