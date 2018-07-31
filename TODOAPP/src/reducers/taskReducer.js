import { ADD_TASK } from '../actions/type'

export default function (state = [], actions) {
    switch (actions.type) {
        case ADD_TASK:
            // 1. check exist task 
            // 2. add task 
            // 3. sort 
            const taskInThisDay = state.filter(item => item.id === actions.payload.id)
            if (taskInThisDay.length == 0) {
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
        default: return state
    }
}