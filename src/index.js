import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import rootreducer from "./redux/rootreducer";
import {Provider} from "react-redux";

const store = createStore(rootreducer);

const app = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root')
);

