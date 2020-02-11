import React from 'react';

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mistakesCount = 3} = props;

  return (
    <p>Количество ошибок — {mistakesCount}!</p>
  );
};

export default WelcomeScreen;
