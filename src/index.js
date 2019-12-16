import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Lifecycle from './Lifecycle';

import './common.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<Lifecycle />, document.getElementById('lifecycle'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
