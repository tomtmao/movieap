import { combineReducers } from 'redux'
import city from './city'
import HotArr from './HotArr'
import Recent from './Recent'
import MovieDay from "./MovieDay"
import RecentList from './RecentList'
import CinemaList from './cinemaList'
import CinemaShowList from './cinemaShowList'
import MovieCheck from './movie'
import MovieMsg from "./MovieMsg"

export default combineReducers({
    city,
    HotArr,
    Recent,
    MovieDay,
    RecentList,
    CinemaList,
    CinemaShowList,
    MovieCheck,
    MovieMsg
})