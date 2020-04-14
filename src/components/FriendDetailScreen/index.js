import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useSafeArea} from 'react-native-safe-area-context';
import React from 'react';

const {width: deviceWidth} = Dimensions.get('window');

const DetailScreen = ({navigation}) => {
  const {top: topInsect} = useSafeArea();
  const item = navigation.getParam('item');
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
          top: topInsect,
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

DetailScreen.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  return [item.email];
};

DetailScreen.navigationOptions = () => {
  headerMode: 'none';
};

export default DetailScreen;
