import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import normalize from 'react-native-normalize';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //function to clear Input
  const clearInputhandler = () => {
    setEmail('');
    setPassword('');
  };

  //function to check for a valid user
  const handleLogin = () => {
    if (email === 'abc' && password === '123') {
      props.navigation.navigate('Userprofile');
    } else {
      // alert('Invalid email or password');
      Alert.alert(
        'Invalid email or password',
        'Please enter a valid email or passowrd',
        [{text: 'ok', style: 'destructive', onPress: clearInputhandler}],
      );
    }
  };

  return (
    <Background>
      <View
        style={{
          alignItems: 'center',
          width: normalize(420),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: normalize(64),
            fontWeight: 'bold',
            marginVertical: normalize(20),
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: normalize(700),
            width: normalize(460),
            borderTopLeftRadius: normalize(130),
            paddingTop: normalize(100),
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: normalize(19),
              fontWeight: 'bold',
              marginBottom: normalize(20),
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Btn
            style={{bottom: -50}}
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={handleLogin}
          />
        </View>
      </View>
    </Background>
  );
};

export default Login;
