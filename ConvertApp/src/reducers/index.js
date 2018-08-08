import { combineReducers } from 'redux'
import leftTextChangeReducer from './leftTextChangeReducer'
import rightTextChangeReducer from './rightTextChangeReducer'
import setKeyReducer from './setKeyReducer';
export default combineReducers({
    left_text: leftTextChangeReducer,
    right_text: rightTextChangeReducer,
    keyData: setKeyReducer,
})