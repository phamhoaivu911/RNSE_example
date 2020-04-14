import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';

import {FRIEND_DETAIL} from '../../navigation/routes';
import data from './data';

const Item = item => {
  return (
    <TouchableOpacity onPress={item.onPress} style={{padding: 15}}>
      <SharedElement id={item.email}>
        <Image
          source={{uri: item.photo}}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </SharedElement>
    </TouchableOpacity>
  );
};

const Row = ({rowData}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {rowData.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            onPress={() => navigation.navigate(FRIEND_DETAIL, {item})}
            {...item}
          />
        )}
        keyExtractor={({email}) => email}
      />
    </View>
  );
};

export default HomeScreen;
