import React from "react"
import { movieRoom } from "@/store/actionCreator"
import { connect } from "react-redux"
import ShowDate from "./ShowDate"
import MvSw from "./MovieSwiper"
import CinemaSnack from "./CinemaSnack"

const mapStateToProps = state => {
    return {
        movieRoom: state.MvRoomInfo,
        MovieCheck: state.MovieCheck
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMvRoomList(roominfo) {
            dispatch(movieRoom(roominfo))
        },
        checkMovieId(movieId) {
            dispatch({
                type: "CHECK_MOVIE_ID",
                payload: movieId
            })
        }
    }
}


@connect(mapStateToProps, mapDispatchToProps)
class MvRoomList extends React.Component {
    componentDidMount() {
        let reg = /\D*/
        let cinemaId = this.props.location.search.replace(reg,'')
        
        let roominfo = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
            Referer: "http://m.maoyan.com/shows/"+cinemaId+"?$from=canary",
            cinemaId: cinemaId
        }
        this.props.getMvRoomList(roominfo)
    }
    getId(id = '') {
        this.props.checkMovieId(id)
    }
    render() {
        if (this.props.movieRoom.channelId) {
            this.id = this.props.MovieCheck ? this.props.MovieCheck : this.props.movieRoom.showData.movies[0].id
            return (
                <div className="body-wrap">
                    <MvSw getId={this.getId.bind(this)} />
                    <ShowDate {...this.props.movieRoom.showData} id={this.id}></ShowDate>
                    <CinemaSnack {...this.props} />
                </div>
            )
        } else {
            return null
        }
    }
}

export default MvRoomList