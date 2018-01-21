import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RouterX from './components/RouterX';

ReactDOM.render(<RouterX />, document.getElementById('root'));
registerServiceWorker();
