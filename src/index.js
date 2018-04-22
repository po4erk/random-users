import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import combineReducers from './reducers';


const store = createStore(combineReducers,applyMiddleware(thunk));

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App /> 
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
