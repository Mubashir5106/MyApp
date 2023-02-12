import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function Signup({navigation}) {
function handler(screenName){
  navigation.navigate(screenName)
}
  return (
    <>
      <ScrollView>
        <View style={style.splash}>
          <Image
            style={style.img}
            source={require('../images/SAYLANIWELFARE.png')}
          />
          <Text style={style.text}>ONLINE DISCOUNT STORE</Text>
        </View>
<View style = {style.mainarea}>
        <View style={style.splash1}>
          <TextInput
            placeholder={'Full Name'}
            keyboardType="default"
            style={style.textInput}
          />
          <TextInput
            placeholder={'Contact'}
            keyboardType="numeric"
            style={style.textInput}
          />
          <TextInput
            placeholder={'Email'}
            keyboardType="email-address"
            secureTextEntry={true}
            style={style.textInput}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={style.passwordText}
          />
          
        </View>
        </View>
        
        <View style={style.main}>
          <TouchableOpacity style={style.btnstyle} onPress={() => handler('Login')}>
            <Text style={style.button}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handler('Login')}>
            <View>
              <Text style={style.text1}>Already Have An Account ? Login.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  splash: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 120,
  },
  img: {
    resizeMode: 'contain',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: '4%',
    fontWeight: 'bold',
    color: 'blue',
  },
  textInput: {
    marginLeft: 40,
    marginTop: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    marginRight: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },

  splash1: {
    display: 'flex',
    marginVertical: -70,
  },

  btnstyle: {
    marginVertical: 100,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 200,
  },

  button: {
    display: 'flex',
    color: 'white',
    padding: 20,
    justifyContent: 'center',
    paddingLeft: 60,
    fontSize: 20,
    fontWeight: 'bold',
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    marginVertical: -80,
    fontWeight: 'bold',
    color: 'blue',
  },

  passwordText : {
      marginLeft: 40,
      marginTop: 20,
      fontSize: 16,
      backgroundColor: '#ffffff',
      borderRadius: 3,
      marginRight: 40,
      borderBottomColor: 'gray',
      borderBottomWidth: 2,
  },

  mainarea : {
    marginVertical : 55
  }
});

export default Signup;
