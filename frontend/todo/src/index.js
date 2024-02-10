import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { UserStateContext, UserStateReducerContext } from './userContext';
// import { initialUserState, userStateReducer } from './userStateReducer';
import { UserProvider } from './userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <UserProvider>
       <App />
    </UserProvider>
       
    </>
);

