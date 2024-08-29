import { createContext } from "react";

export const INITIAL_STATE = {
    userInfo: {
        'id': '',
        'email': '',
        'first_name': '',
        'last_name': ''
    },
};

export const AppContext = createContext({
    state: INITIAL_STATE,
    userContext: INITIAL_STATE.userInfo
});