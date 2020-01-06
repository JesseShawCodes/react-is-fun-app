import C from '../constants'

// export const goal = (state=10, action) => {
//     console.log("Goal Reducer is Running");
//     if (action.type === C.SET_GOAL) {
//         return action.payload
//     }
//     else {
//         return state
//     }
// }

export const skiDay = (state=null, action) => {
    if (action.type === C.ADD_DAY) {
        return action.payload
    }
    else {
        return state
    }
}

export const errors = (state=[], action) => {
    if (action.type === C.ADD_ERROR) {
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === C.CLEAR_ERROR) {
        return state.filter((message, i) => i !== action.payload);
    }
    else {
        return state
    }
}

export const goal = (state=10, action) =>
    (action.type === C.SET_GOAL) ?
        parseInt(action.payload) : 
        state

export const allSkiDays = (state=[], action) => {
    switch(action.type) {
        case C.ADD_DAY : 
            console.log(action.payload.date);
            console.log(state);
            const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date)
            return (hasDayAlready) ? 
                state : 
                [
                    ...state,
                    skiDay(null, action) 
                ]
        case C.REMOVE_DAY :
            console.log("REMOVE DAY")
            return state.filter(skiDay => skiDay.date !== action.payload)
        default:
            return state
    }
}

export const fetching = (state, action) => {
    console.log("FETCHING");
    switch(action.type) {
        case C.FETCH_RESORT_NAMES:
            return true
        case C.CANCEL_FETCHING:
            return false
        case C.CHANGE_SUGGESTIONS:
            return false
        default:
            return state
    }
}

export const suggestions = (state, action) => {
    console.log("suggestions reducer running");
    console.log(action.type);
    switch(action.type) {
        case (C.CLEAR_SUGGESTIONS) :
            return [];
        case (C.CHANGE_SUGGESTIONS) :
            return action.payload;
        default : 
            return state;
    }
}