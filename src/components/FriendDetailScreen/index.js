import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';

const {width: deviceWidth} = Dimensions.get('window');

const DetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View>
      <SharedElement id={item.email}>
        <Image
          source={{uri: item.photo}}
          style={{width: deviceWidth, height: deviceWidth, resizeMode: 'cover'}}
        />
      </SharedElement>
      <View style={{padding: 15}}>
        <Text>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 15,
          left: 15,
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
