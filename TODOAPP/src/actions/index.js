import { CHOOSE_CATEGORY, ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './type'

export const chooseCategory = (category) => ({
    type: CHOOSE_CATEGORY,
    payload: category
})
export const addTask = (data) =>({
    type: ADD_TASK,
    payload: data
})

export const toggleTask = (data) =>({
    type: TOGGLE_TASK,
    payload: data,
})
export const deleteTask = (data) =>({
    type: DELETE_TASK,
    payload: data,
})