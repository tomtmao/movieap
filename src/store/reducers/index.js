import { combineReducers } from 'redux'
import city from './city'
import HotArr from './HotArr'
import Recent from './Recent'
import RecentList from './RecentList'
import CinemaList from './cinemaList'
import MovieCheck from './movie'
import MvRoomInfo from './mvRoomInfo'

export default combineReducers({
    city,
    HotArr,
    Recent,
    RecentList,
    CinemaList,
    MovieCheck,
    MvRoomInfo
})