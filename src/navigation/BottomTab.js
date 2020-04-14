import {Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import {FRIENDS_BOTTOM_TAB} from './routes';
import FriendsStack from './FriendsStack';

const Settings = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings</Text>
  </View>
);

const BottomTab = createBottomTabNavigator({
  [FRIENDS_BOTTOM_TAB]: {
    screen: FriendsStack,
    navigationOptions: {
      title: 'Friends',
    },
  },
  SETTINGS_BOTTOM_TAB: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export default BottomTab;
