import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errorsCount = 5;

it(`<WelcomeScreen /> is rendered correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={errorsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

