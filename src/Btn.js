import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import normalize from 'react-native-normalize';

//function for custom button

const Btn = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: normalize(100),
        alignItems: 'center',
        width: normalize(300),
        paddingVertical: normalize(5),
        marginVertical: normalize(10),
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
