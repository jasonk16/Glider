/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Main from '../app/screens/HomeScreen'

// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer';

describe('React app snapshot test ', () => {

  it('App renders correctly', () => {
    const fullAppTest = TestRenderer.create(<App />).toJSON();
    expect(fullAppTest).toMatchSnapshot();
  });

  it('Homescreen renders correctly', () => {
    const fullAppTest = TestRenderer.create(<Main />).toJSON();
    expect(fullAppTest).toMatchSnapshot();
  });

})
