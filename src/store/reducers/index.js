import { combineReducers } from 'redux'
import city from './city'
import comments from "./comments"
import CinemaList from './cinemaList'
import CinemaShowList from './cinemaShowList'
import HotArr from './HotArr'
import Recent from './Recent'
import RecentList from './RecentList'
import MovieDay from "./MovieDay"
import MovieCheck from './movie'
import movieDeail from "./movieDeail"
import MvRoomInfo from './mvRoomInfo'
import MovieMsg from "./MovieMsg"
import MoviesLists from './moviesList'


export default combineReducers({
    comments,
    city,
    CinemaList,
    CinemaShowList,
    HotArr,
    Recent,
    RecentList,
    MovieDay,
    MovieCheck,
    movieDeail,
    MvRoomInfo,
    MoviesLists,
    MovieMsg
})