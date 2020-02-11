import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  return (
    <div>
      <WelcomeScreen {...props} />
    </div>
  );
};

export default App;
