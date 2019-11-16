import { combineReducers } from 'redux'
import city from './city'
import HotArr from './HotArr'
import Recent from './Recent'

export default combineReducers({
    city,
    HotArr,
    Recent
})