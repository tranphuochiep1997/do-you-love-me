import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
