import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Life />, document.getElementById('root'));
registerServiceWorker();
