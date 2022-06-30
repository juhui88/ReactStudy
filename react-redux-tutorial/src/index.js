/*import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './modules';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

//serviceWorker.unregister();