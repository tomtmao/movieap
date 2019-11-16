import React from "react"
import { imgLists ,imgComingLists } from "../../store/actionCreator"
import { connect } from "react-redux"
import Banner from "./Banner"
import MovieListView from "./MovieListView"

const mapStateToProps = state => {
    return {
        imglists: state.Recent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImgList() {
            dispatch(imgLists())
            
        },
        getComingList(){
            dispatch(imgComingLists())
        }
    }
}


@connect(mapStateToProps, mapDispatchToProps)
class Recent extends React.Component {
    componentDidMount() {
        this.props.getImgList()
    }
    render() {
        console.log(this.props)

        return (
            <div>
                <Banner />
                <MovieListView />
            </div>
        )
    }
}
export default Recent