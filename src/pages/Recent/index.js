import React from "react"
import { imgLists, imgComingLists } from "../../store/actionCreator"
import { connect } from "react-redux"
import Banner from "./Banner"
// import MovieListView from "./MovieListView"
import MoviesDate from "./MovieList"

const mapStateToProps = state => {
    return {
        imglists: state.Recent,
        imgComingLists: state.RecentList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImgList() {
            dispatch(imgLists())
        },
        getComingList() {
            dispatch(imgComingLists())
        }
    }
}


@connect(mapStateToProps, mapDispatchToProps)

class Recent extends React.Component {
    componentDidMount() {
        this.props.getImgList()
        this.props.getComingList()
    }
    render() {
        return (
            <div>
                <Banner imglists={this.props.imglists} />
                {/* <MovieListView imgComingLists={this.props.imgComingLists} /> */}
                <MoviesDate imgComingLists={this.props.imgComingLists}/>
            </div>
        )
    }
}
export default Recent