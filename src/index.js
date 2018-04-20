import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import allReducers from './reducers';


const store = createStore(allReducers,applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
