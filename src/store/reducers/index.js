import { combineReducers } from 'redux'
import city from './city'
import HotArr from './HotArr'
import Recent from './Recent'
import CinemaList from './cinemaList'
import MovieCheck from './movie'
import comments from "./comments"
import movieDeail from "./movieDeail"
export default combineReducers({
    city,
    HotArr,
    Recent,
    CinemaList,
    MovieCheck,
    comments,
    movieDeail
})