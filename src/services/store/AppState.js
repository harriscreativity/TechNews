import React from 'react';

let user = {
    fullname : '',
    email : '',
    preferences : [],
    profile : '',
    telephone : '',
    country : '',
    lang : ''
}
const AppState = React.createContext(user);

export const AppStateConsumer = AppState.Consumer;
export const AppStateProvider = AppState.Provider;

export default AppState;