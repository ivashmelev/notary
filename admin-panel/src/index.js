import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Root/>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
