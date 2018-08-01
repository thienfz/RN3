import { ADD, SUB } from '../actions/type'
export default function (state = 0, actions) {
    switch (actions.type) {
        case ADD:
            var temp = state;
            return temp + 1;
        case SUB:
            var temp = state
            return temp - 1;
        default: return state
    }
}