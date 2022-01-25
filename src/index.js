import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import rootreducer from "./redux/rootreducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import 'antd/dist/antd.css';


const store = createStore(rootreducer, composeWithDevTools());

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

