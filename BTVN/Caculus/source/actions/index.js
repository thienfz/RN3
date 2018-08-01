import { ADD, SUB } from "./type";
export const addOne = (value) => ({
    type: ADD,
    payload: value
})
export const subOne = (value) => ({
    type: SUB,
    payload: value
})