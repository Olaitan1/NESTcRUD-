import {Reducer} from 'redux'
export const reducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_LOGGED_IN':
        return {
            ...state,
            isLoggedIn: action.payload,
        };
        default:
        return state;
    }
};
