import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// Reducers
const personName = (state = 'Name', action) => {
    //always check the action type before changing the state
    //always return a new state
    if (action.type === 'SET_PERSON_NAME') {
        return action.payload;
    }
    return state;
}

// new reducer containing array
const allPeople = (state = ['Firuza'], action) => {
    if (action.type === 'ADD_PERSON_NAME') {
        // return new array with existing state and new action payload
        return [...state, action.payload];
        //...state i.e. spread operator copies the array or object
        //and adds the new payload similar to .push
    }
        return state;
}


//create a store
const storeInstance = createStore( 
    combineReducers({
        personName,
        allPeople,
    }),
    applyMiddleware(logger),
);


//wrap the App in the Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* tell provider about the store */}
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
