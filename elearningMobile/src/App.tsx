import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes/app.routes'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6548A3" />
      <Routes/>
    </NavigationContainer>
  );
};

export default App