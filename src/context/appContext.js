import React, {useReducer, useContext } from 'react';

import reducer from './reducer';

import { DISPLAY_ALERT } from "./actions";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState); // TODO: INVESTIGATE THIS LINE
    
    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT}); // TODO: INVESTIGATE THIS LINE
    };
    
    return (<AppContext.Provider value={{...state, displayAlert}}>
        {children}
    </AppContext.Provider>)
};

const useAppContext = ()=>{
    return useContext(AppContext);
};

export {AppProvider, initialState, useAppContext}