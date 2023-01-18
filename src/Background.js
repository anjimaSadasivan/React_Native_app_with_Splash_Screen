import React from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';

//Function for using image background

const Background = ({children}) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('./assets/leaves.jpg')}
          style={{
            height: '100%',
          }}
        />
        <View style={{position: 'absolute'}}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default Background;
