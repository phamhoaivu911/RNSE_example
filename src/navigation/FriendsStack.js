import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {FRIENDS_LIST, FRIEND_DETAIL} from './routes';
import FriendDetailScreen from '../components/FriendDetailScreen';
import FriendsListScreen from '../components/FriendsListScreen';

const FriendsStack = createSharedElementStackNavigator(
  {
    [FRIENDS_LIST]: FriendsListScreen,
    [FRIEND_DETAIL]: FriendDetailScreen,
  },
  {
    headerMode: 'none',
  },
);

FriendsStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default FriendsStack;
