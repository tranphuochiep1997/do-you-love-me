import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from "./store/store";

function Main(){
  return (
    <Provider store={store}>
    <App />
    </Provider>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
