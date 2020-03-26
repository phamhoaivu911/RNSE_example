import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import React from 'react';

import {FRIENDS_TOP_TAB, FRIEND_DETAIL} from '../routes';
import FriendDetailScreen from '../../components/FriendDetailScreen';
import TopTabScreen from './TopTabScreen';

const Stack = createSharedElementStackNavigator();

const TopTabStack = () => (
  <Stack.Navigator
    initialRouteName={FRIENDS_TOP_TAB}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={FRIENDS_TOP_TAB} component={TopTabScreen} />
    <Stack.Screen
      name={FRIEND_DETAIL}
      component={FriendDetailScreen}
      sharedElementsConfig={route => {
        const {item} = route.params;
        console.log('item', item);
        return [item.email];
      }}
      options={{
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {opacity: progress},
        }),
      }}
    />
  </Stack.Navigator>
);

export default TopTabStack;
