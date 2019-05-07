import React from "react"

class IconWrapper extends React.Component {
    render() {
        const { children, ...rest } = this.props;
        return <svg {...rest}>{children}</svg>
    }
}


IconWrapper.defaultProps = {
    width: '32px',
    heigth: '32px',
    viewBox: '0 0 32 32'
}

export default IconWrapper