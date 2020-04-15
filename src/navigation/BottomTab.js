import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import React from 'react';

import {FRIENDS_BOTTOM_TAB} from './routes';
import FriendsListScreen from '../components/FriendsListScreen';

const Tab = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

const Settings = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings</Text>
  </View>
);

const FriendsListStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FRIENDS_LIST_ROOT"
      component={FriendsListScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={FRIENDS_BOTTOM_TAB}
      component={FriendsListStack}
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
