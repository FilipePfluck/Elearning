import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import AppProvider from './context'

import Routes from './routes/app.routes'

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#6548A3" />
        <Routes/>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App