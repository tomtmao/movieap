import React from "react"
import { imgLists ,imgComingLists } from "../../store/actionCreator"
import { connect } from "react-redux"
import MovieList from "./MovieList"
import Swiper from "./Swiper"
import MvBanner from "./Banner"

const mapStateToProps = state => {
    return {
        imglists: state.Recent,
        imgComingLists: state.RecentList
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
        this.props.getComingList()
    }
    render() {
        // console.log(this.props)
        // console.log(this.props.imglists)
        return (
            <div style={{backgroundColor:"#f5f5f5",overflowX:"hidden"}}>
                <Swiper imglists={this.props.imglists} history={this.props.history}/>
                {/* <MvBanner imglists={this.props.imglists} history={this.props.history}/> */}
                <MovieList history={this.props.history}/>
            </div>
        )
    }
}
export default Recent