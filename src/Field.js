import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';
import normalize from 'react-native-normalize';

//function for custom text input

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: normalize(100),
        color: darkGreen,
        paddingHorizontal: normalize(10),
        width: normalize(300),
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: normalize(10),
      }}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
