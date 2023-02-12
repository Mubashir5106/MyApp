
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './signupscreem';
import Login from './loginscreen';
import SplashScreen from './spalsh';
import Cart from './cart';
import CartScreen from './cardScreen';
import Account from './account';
import Home from './home';
// import AdminSetting from './accountsetting';
const Stack = createNativeStackNavigator ();

function Navigation () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen  name = "Splash" component={SplashScreen} options={{headerShown:false}}/>
                <Stack.Screen  name = "Signup" component={Signup} />
                <Stack.Screen  name = "Login" component={Login} />
                <Stack.Screen name = "Cart"  component={Cart} />
                <Stack.Screen name = "home"  component={Home} />
                <Stack.Screen name = "cartScreen"  component={CartScreen} />
                <Stack.Screen name = "account"  component={Account} />
                {/* <Stack.Screen name='Account' component={AdminSetting} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;