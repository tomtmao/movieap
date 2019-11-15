import React from "react"
import { imgLists } from "../../store/actionCreator"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        imglists: state.Recent
    }
}

const mapDispatchToProps = dispatch => {
    // console.log(dispatch)
    return {
        getImgList() {
            dispatch(imgLists())
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Recent extends React.Component {
    componentDidMount() {
        this.props.getImgList()
    }
    render() {
        // console.log(props)

        return (
            <div>
                <h1>9999</h1>
            </div>
        )
    }
}
export default Recent