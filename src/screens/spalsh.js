import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Signup from './signupscreem';
function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
    }, 1000);
  }, []);

  function handler(screenName){
    navigation.navigate(screenName)
}
  return (
    <View style={style.splash}>
      <Image style={style.img2} source={require('../images/Logo.png')} />
      <Image
        style={style.img}
        source={require('../images/SAYLANIWELFARE.png')}
      />
      <Text style={style.text}>ONLINE DISCOUNT STORE</Text>
      <TouchableOpacity style={style.splash}>
        <View style={style.btnstyle}>
          <Text style={style.button}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  splash: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img2: {
    resizeMode: 'contain',
    width: '60%',
    marginVertical:'40%'
    
  },
  img: {
    resizeMode: 'contain',
    width: '60%',
    marginVertical: 5,
    marginTop :-150

    
  },

  text: {
    marginTop: '5%',
    fontWeight: 'bold',
    color: 'blue',
  },

  btnstyle: {
    marginVertical: 180,
    backgroundColor: 'green',
    borderRadius: 20,
  },

  button: {
    display: 'flex',
    color: 'white',
    padding: 20,
    paddingLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
