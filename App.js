/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';
import React from 'react';

import data from './data';

const HOME = 'HOME';
const DETAIL = 'DETAIL';

const Item = item => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(DETAIL, {item})}
      style={{padding: 15}}>
      <SharedElement id={item.email}>
        <Image
          source={{uri: item.photo}}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </SharedElement>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Home Screen</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={({email}) => email}
      />
    </View>
  );
};

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
          top: 45,
          left: 15,
          width: 25,
          height: 25,
          borderRadius: 12,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen
          name={DETAIL}
          component={DetailScreen}
          sharedElementsConfig={route => {
            console.log('item', item);
            const {item} = route.params;
            return [item.email];
          }}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {opacity: progress},
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
