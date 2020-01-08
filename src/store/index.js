import C from '../constants';
import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Higher Order Middleware Function
const consoleMessages = (store) => (next) => (action) => {
    let result
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log(`ski days`, store.getState().allSkiDays.length);
    let { allSkiDays, goal, errors, resortNames } = store.getState()
    console.log(`
        ski days: ${allSkiDays.length}
        goal: ${goal}
        fetching: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}
        errors: ${errors}
    `)
    result = next(action)
    console.log(action);
    console.groupEnd();
    return result
}

export default (initialState={}) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState, applyMiddleware(logger))
}