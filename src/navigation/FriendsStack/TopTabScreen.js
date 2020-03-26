import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

import {FRIENDS_LIST} from '../routes';
import FriendsListScreen from '../../components/FriendsListScreen';

const FriendRequestsScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Friend Requests Screen</Text>
  </View>
);

const TopTab = createMaterialTopTabNavigator();

const TopTabScreen = () => (
  <SafeAreaView style={{flex: 1, paddingBottom: 0}}>
    <TopTab.Navigator
      initialRouteName={FRIENDS_LIST}
      tabBarOptions={{indicatorStyle: {height: 4}}}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <TopTab.Screen
        name={FRIENDS_LIST}
        component={FriendsListScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'blue' : color}}>Friends</Text>
          ),
        }}
      />
      <TopTab.Screen
        name="FRIEND_REQUESTS"
        component={FriendRequestsScreen}
        options={{
          tabBarLabel: ({focused, color}) => (
            <Text style={{color: focused ? 'blue' : color}}>Requests</Text>
          ),
        }}
      />
    </TopTab.Navigator>
  </SafeAreaView>
);

export default TopTabScreen;
