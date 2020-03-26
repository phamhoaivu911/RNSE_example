import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStack from './RootStack';

const AppContainer = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default AppContainer;
