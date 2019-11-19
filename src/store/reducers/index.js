import { combineReducers } from 'redux'
import city from './city'
import HotArr from './HotArr'
import Recent from './Recent'
import CinemaList from './cinemaList'
import MovieCheck from './movie'
import MoviesLists from './moviesList'


export default combineReducers({
    city,
    HotArr,
    Recent,
    CinemaList,
    MovieCheck,
    MoviesLists,
})