import { SETKEY } from '../actions/type'
export default function (state = { left: 1, right: 1 }, action) {
    return action.type === SETKEY ?
        action.payload : state
}