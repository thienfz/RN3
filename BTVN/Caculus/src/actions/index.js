import { BUTTON } from './type';
export const pressed = (kind) =>({
    type: BUTTON,
    payload: kind
})