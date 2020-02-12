import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Setting = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App errorsCount={Setting.ERRORS_COUNT} />,
    document.getElementById(`root`)
);
