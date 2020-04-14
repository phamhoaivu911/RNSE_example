import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useSafeArea} from 'react-native-safe-area-context';
import React from 'react';

const {width: deviceWidth} = Dimensions.get('window');

const DetailScreen = ({route, navigation}) => {
  const {top: topInsect} = useSafeArea();
  const {item} = route.params;
  return (
    <ScrollView>
      <SharedElement id={`${item.email}.photo`}>
        <Image
          source={{uri: item.photo}}
          style={{width: deviceWidth, height: deviceWidth, resizeMode: 'cover'}}
        />
      </SharedElement>
      <SharedElement id={`${item.email}.content`}>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 30}}>{item.name}</Text>
          <Text style={{fontSize: 22}}>{item.position}</Text>
        </View>
      </SharedElement>
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
    </ScrollView>
  );
};

export default DetailScreen;
