import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import FileDropZone from './components/FileDropZone/'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<FileDropZone />, document.getElementById('root-drop'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
