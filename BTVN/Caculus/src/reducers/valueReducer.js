import { BUTTON } from "../actions/type";

export default function(state = 69, action){
    switch(action.type){
        case BUTTON: return state+action.payload
        default: return state
    }
}

