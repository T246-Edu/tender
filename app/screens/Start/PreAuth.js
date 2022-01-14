import React from 'react';
import {Image, View} from 'react-native';

import AppScreen from '../../components/AppScreen';
import AppBtn from '../../components/AppButton';
import AppLabels from '../../components/CustomText';

function PreAuth({navigation}) {
  return (
    <AppScreen>
      <View style={{marginTop: 70, alignItems: 'center'}}>
        <AppLabels text="Welcome" style="bold head" />
        <Image
          source={require('../../assets/icons/Icon.png')}
          style={{marginTop: 50}}
        />
        <AppBtn
          text="Login"
          style={{marginTop: 110}}
          onPress={() => navigation.navigate('Login')}
        />
        <AppBtn
          text="Register"
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </AppScreen>
  );
}

export default PreAuth;
