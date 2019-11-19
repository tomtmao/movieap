import React from "react"
import { movieRoom } from "../../store/actionCreator"
import { connect } from "react-redux"
import MvSw from "./MovieSwiper"
const mapStateToProps = state => {
    return {
        movieRoom: state.MvRoomInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMvRoomList(roominfo){
            dispatch(movieRoom(roominfo))
        }
    }
}


@connect(mapStateToProps, mapDispatchToProps)
class MvRoomList extends React.Component {
    componentDidMount() {
        let roominfo={
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
            Referer:"http://m.maoyan.com/shows/24466?$from=canary",
            cinemaId:"2598"
        }
        this.props.getMvRoomList(roominfo)
    }
    render() {
        console.log(this.props.movieRoom)
        return (
            <div className="body-wrap">
                <MvSw />
            </div>
        )
    }
}

export default MvRoomList