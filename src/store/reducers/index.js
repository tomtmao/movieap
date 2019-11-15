import { combineReducers } from 'redux'
import ci from './ci'
import HotArr from './HotArr'
import Recent from './Recent'

export default combineReducers({
    ci,
    HotArr,
    Recent
})