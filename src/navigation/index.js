import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import FriendsStack from './FriendsStack';

const AppContainer = () => (
  <NavigationContainer>
    <FriendsStack />
  </NavigationContainer>
);

export default AppContainer;
