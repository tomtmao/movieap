import React from "react"

class Top extends React.Component {
    render() {
        return (
            <div className="maintop">{this.props.children}</div>
        )
    }
}

export default Top