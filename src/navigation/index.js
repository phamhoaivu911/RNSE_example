import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AppStack from './AppStack';

const AppContainer = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default AppContainer;
