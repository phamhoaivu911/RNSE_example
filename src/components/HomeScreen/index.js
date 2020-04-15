import {SharedElement} from 'react-navigation-shared-element';
import {View} from 'react-native';
import React from 'react';

import {SEARCH_SCREEN} from '../../navigation/routes';
import SearchInput from '../SearchScreen/SearchInput';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SharedElement id="searchBar" style={{padding: 15}}>
        <SearchInput onFocus={() => navigation.navigate(SEARCH_SCREEN)} />
      </SharedElement>
    </View>
  );
};

export default HomeScreen;
