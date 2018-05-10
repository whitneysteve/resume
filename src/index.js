import './index.css';

import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom';

// Hide gret selection boxes on mobile
document.addEventListener("touchstart", function(){}, true);

ReactDOM.render(<App />, document.getElementById('root'));
