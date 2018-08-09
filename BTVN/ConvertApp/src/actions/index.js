import { LEFT_TEXT_CHANGE, RIGHT_TEXT_CHANGE, SETKEY } from './type';

export const leftTextChange = (text) => ({
    type: LEFT_TEXT_CHANGE,
    payload: text,
})
export const rightTextChange = (text) => ({
    type: RIGHT_TEXT_CHANGE,
    payload: text
})
export const setKey = (left, right) => ({
    type: SETKEY,
    payload: {
        left: left,
        right: right,
    }
})