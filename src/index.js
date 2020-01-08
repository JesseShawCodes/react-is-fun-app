import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}

const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(logger)
);

window.store = store

store.subscribe(() => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": false,
        "backcountry": true
    }
})

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})
const unsubscribeGoalLogger = store.subscribe(() => console.log(`Goal: ${store.getState().goal}`));

setInterval(() => {
    store.dispatch({
        type: C.SET_GOAL,
        payload: Math.floor(Math.random() * 100)
    })
}, 250)

setTimeout(() => {
    unsubscribeGoalLogger();
}, 3000)