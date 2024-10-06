
import React, { createContext, useContext } from 'react';

const ApiDataContext = createContext();

export const Contextapi = ({ children }) => {
  
    return (
        <ApiDataContext.Provider value={'hello'}>
            {children}
        </ApiDataContext.Provider>
    );
};


export const ApiData = () => {
    return useContext(ApiDataContext);
};
