import { CHOOSE_CATEGORY } from '../actions/type'

export default function (state = 'Todo', actions) {
    switch (actions.type) {
        case CHOOSE_CATEGORY:
            console.log(`preState = ${state} and actionsState = ${actions.type} and actionPayload = ${actions.payload}`)
            return actions.payload
        default: console.log('undefined actions')
            return state
    }
}