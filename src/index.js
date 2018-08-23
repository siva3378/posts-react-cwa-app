import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react";
import stores from './stores';

const root = <Provider store={stores}><App /></Provider>
ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
