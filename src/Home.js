import React from 'react';
import {View, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {green} from './Constants';

const Home = props => {
  // const testAlert = () => {
  //   console.log('test');
  // };
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 64}}>Demo</Text>
        <Text style={{color: 'white', fontSize: 64, marginBottom: 40}}>
          Application
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
      </View>
    </Background>
  );
};

export default Home;
