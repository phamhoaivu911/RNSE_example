import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {FRIENDS_BOTTOM_TAB, FRIENDS_TOP_TAB} from './routes';
import FriendsStack from './FriendsStack';

const isHomeRootScreen = route => {
  const currentScreenName =
    (route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen) || FRIENDS_BOTTOM_TAB;
  return (
    currentScreenName === FRIENDS_BOTTOM_TAB ||
    currentScreenName === FRIENDS_TOP_TAB
  );
};

const Tab = createBottomTabNavigator();

const Home = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home</Text>
  </View>
);

const Settings = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Settings</Text>
  </View>
);

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HOME_BOTTOM_TAB"
      component={Home}
      options={{
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name={FRIENDS_BOTTOM_TAB}
      component={FriendsStack}
      options={({route}) => ({
        tabBarLabel: 'Friends',
        tabBarVisible: isHomeRootScreen(route),
      })}
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
