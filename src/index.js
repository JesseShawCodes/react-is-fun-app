import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import storeFactory from './store';

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}


const saveState = () => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
}

const store = storeFactory(initialState);

store.subscribe(saveState)

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": true,
        "backcountry": true,
    }
})

