import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator initialRouteName="root" headerMode="none">
    <Stack.Screen name="root" component={BottomTab} />
  </Stack.Navigator>
);

export default RootStack;
