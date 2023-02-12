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

function Login({navigation}) {
  function handler(screenName){
    navigation.navigate(screenName)
  }
  return (
    <>
      <View style={style.splash}>
        <Image
          style={style.img}
          source={require('../images/SAYLANIWELFARE.png')}
        />
        <Text style={style.text}>ONLINE DISCOUNT STORE</Text>
      </View>
      <View style={style.mainarea}>
        <View style={style.splash1}>
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


      <TouchableOpacity>
            <View>
              <Text style={style.text1}>Forget Password</Text>
            </View>
          </TouchableOpacity>
      

      <View style={style.main}>
        <TouchableOpacity style={style.btnstyle} onPress={() => handler('Cart')}>
          <Text style={style.button}>lOGIN</Text>
        </TouchableOpacity>
      </View>

     
      <TouchableOpacity  onPress={() => handler('Signup')}>
            <View>
              <Text style={style.text2}>Don't have an Account ? Register. </Text>
            </View>
          </TouchableOpacity>
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
    marginVertical: 5,
  },

  btnstyle: {
    marginVertical: 60,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 200,
    justifyContent: 'center',
    display : 'flex'
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
    display : 'flex'
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
text1: {
    marginVertical: 20,
    fontWeight: 'bold',
    color: 'blue',
    paddingLeft : 40 
  },

  text2: {
    marginVertical: -40,
    fontWeight: 'bold',
    color: 'blue',
    paddingLeft : 80 
  },

});
export default Login;
