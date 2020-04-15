import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import React from 'react';

import {HOME_SCREEN, SEARCH_SCREEN} from './routes';
import HomeScreen from '../components/HomeScreen';
import SearchScreen from '../components/SearchScreen';

const Stack = createSharedElementStackNavigator();

const FriendsStack = () => (
  <Stack.Navigator initialRouteName={HOME_SCREEN}>
    <Stack.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{title: 'Home'}}
    />
    <Stack.Screen
      name={SEARCH_SCREEN}
      component={SearchScreen}
      options={{headerShown: false}}
      sharedElementsConfig={() => {
        return ['searchBar'];
      }}
    />
  </Stack.Navigator>
);

export default FriendsStack;
