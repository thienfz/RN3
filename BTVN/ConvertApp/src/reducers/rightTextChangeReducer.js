import { RIGHT_TEXT_CHANGE } from '../actions/type'
export default function (state = 'input here', action) {
    return action.type === RIGHT_TEXT_CHANGE ?
        action.payload : state
}