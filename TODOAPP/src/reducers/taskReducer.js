import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/type'

export default function (state = [], actions) {
    switch (actions.type) {
        case ADD_TASK:
            // 1. check exist task 
            // 2. add task 
            // 3. sort 
            const taskInThisDay = state.filter(item => item.id === actions.payload.id)
            if (taskInThisDay.length === 0) {
                return [
                    ...state,
                    {
                        id: actions.payload.id,
                        date: actions.payload.date,
                        data: [actions.payload.task]
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            }
            else {
                return [
                    ...(state.filter((item) => item.id !== actions.payload.id)),
                    {
                        id: actions.payload.id,
                        date: actions.payload.date,
                        data: [
                            ...(taskInThisDay[0].data),
                            actions.payload.task
                        ].sort((task1, task2) => task1.id - task2.id)
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            }
        case TOGGLE_TASK:
            return state.map(dayTask => (dayTask.id === actions.payload.dayID) ? {
                id: dayTask.id,
                date: dayTask.date,
                data: dayTask.data.map(task => (task.id === actions.payload.timeID) ?
                    {
                        ...task, completed: !task.completed
                    } : task)
            } : dayTask)

        case DELETE_TASK:
            console.log('ok pressed and go into reducer')
            console.log(actions.payload)
            const taskInDay = state.filter(item => item.id === actions.payload.dayID)
            if (taskInDay[0].data.length === 1)
                return state.filter(item => item.id !== actions.payload.dayID)
            else
                return state.map(element =>
                    element.id !== actions.payload.dayID ? element
                        : ({
                            id: taskInDay[0].id,
                            date: taskInDay[0].date,
                            data: taskInDay[0].data.filter(item => item.id !== actions.payload.timeID)
                        })
                )
        default: return state
    }
}