import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {FRIENDS_BOTTOM_TAB} from './routes';
import FriendsListScreen from '../components/FriendsListScreen';

const Tab = createBottomTabNavigator();

const Settings = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings</Text>
  </View>
);

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={FRIENDS_BOTTOM_TAB}
      component={FriendsListScreen}
      options={{
        tabBarLabel: 'Friends',
      }}
    />
    <Tab.Screen
      name="SETTINGS_BOTTOM_TAB"
      component={Settings}
      options={{
        tabBarLabel: 'Settings',
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
