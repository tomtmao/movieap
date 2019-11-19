import { combineReducers } from 'redux'
import city from './city'
import HotArr from './HotArr'
import Recent from './Recent'
import MovieDay from "./MovieDay"
import RecentList from './RecentList'
import CinemaList from './cinemaList'
import CinemaShowList from './cinemaShowList'
import MovieCheck from './movie'
<<<<<<< HEAD
import MvRoomInfo from './mvRoomInfo'
=======
import MovieMsg from "./MovieMsg"
import MoviesLists from './moviesList'

>>>>>>> ffd529aaccc2a4f3039b272c143b804cbe8f4bca

export default combineReducers({
    city,
    HotArr,
    Recent,
    MovieDay,
    RecentList,
    CinemaList,
<<<<<<< HEAD
    MovieCheck,
    MvRoomInfo
=======
    MoviesLists,
    CinemaShowList,
    MovieCheck,
    MovieMsg
>>>>>>> ffd529aaccc2a4f3039b272c143b804cbe8f4bca
})