import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {FRIEND_DETAIL} from '../../navigation/routes';
import data from './data';

const Item = item => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(FRIEND_DETAIL, {item})}
      style={{padding: 15}}>
      <SharedElement id={`${item.email}.photo`}>
        <Image
          source={{uri: item.photo}}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </SharedElement>
      <SharedElement id={`${item.email}.content`}>
        <Text>{item.name}</Text>
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

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={({email}) => email}
      />
    </View>
  );
};

export default HomeScreen;
