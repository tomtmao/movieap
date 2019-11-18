import { combineReducers } from 'redux'
import ci from './ci'
import HotArr from './HotArr'
import Recent from './Recent'
import MovieDay from "./MovieDay"

export default combineReducers({
    ci,
    HotArr,
    Recent,
    MovieDay
})