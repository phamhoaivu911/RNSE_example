import {HeaderBackButton} from '@react-navigation/stack';
import {SharedElement} from 'react-navigation-shared-element';
import {View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import React from 'react';

import SearchInput from './SearchInput';

const SearchScreen = ({navigation}) => {
  const {top: topInsect} = useSafeArea();
  return (
    <View style={{flexDirection: 'row', marginTop: topInsect + 5}}>
      <HeaderBackButton onPress={navigation.goBack} />
      <SharedElement id="searchBar" style={{flex: 1}}>
        <SearchInput autoFocus />
      </SharedElement>
    </View>
  );
};

export default SearchScreen;
