import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case: CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload} );
         // return {...state, {searchField: action.payload} } works as well
        default:
            return state; // since a pure function should always return something, send state if nothing else matches
    }
}