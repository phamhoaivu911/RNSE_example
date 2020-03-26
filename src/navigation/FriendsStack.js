import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import React from 'react';

import {FRIENDS_LIST, FRIEND_DETAIL} from './routes';
import FriendDetailScreen from '../components/FriendDetailScreen';
import FriendsListScreen from '../components/FriendsListScreen';

const Stack = createSharedElementStackNavigator();

const FriendsStack = () => (
  <Stack.Navigator initialRouteName={FRIENDS_LIST}>
    <Stack.Screen
      name={FRIENDS_LIST}
      component={FriendsListScreen}
      options={{title: 'Friends'}}
    />
    <Stack.Screen
      name={FRIEND_DETAIL}
      component={FriendDetailScreen}
      sharedElementsConfig={route => {
        const {item} = route.params;
        console.log('item', item);
        return [item.email];
      }}
      options={{
        headerShown: false,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {opacity: progress},
        }),
      }}
    />
  </Stack.Navigator>
);

export default FriendsStack;
