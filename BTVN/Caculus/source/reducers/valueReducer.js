import { PRESSED } from '../actions/type'

export default function (state = 0, actions) {
    var temp = state
    switch (actions.type) {
        case PRESSED:
            return actions.payload == 'add' ? temp + 1 : temp - 1
        default: return temp
    }
}