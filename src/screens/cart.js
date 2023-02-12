import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Cart = ({navigation}) => {
    function handler(screenName){
        navigation.navigate(screenName)
    }
  return (
    <SafeAreaView>
      <View style={style.main}>
        <Image
          style={style.sylani}
          source={require('..//images/SAYLANIWELFARE.png')}
        />
        <TouchableOpacity>
          <View>
            <Image
              style={style.cart}
              source={require('..//images/cart-img.jpg')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.h3}>
        <Text style={style.text}>DICCOUNT STORE</Text>
      </View>
      <View style={style.coverView}>
        <Image
          style={style.cover}
          source={require('..//images/main-img.jpg')}
        />
      </View>
      <View style={style.ssimage}>
        <View style={style.search}>
          <Image source={require('..//images/search-icon.jpg')} />

          <TextInput style={style.searchInput} placeholder={'search'} />
        </View>
      </View>

      <ScrollView style={style.scrollimages} horizontal={true}>
        <Image style={style.img} source={require('..//images/one.png')} />
        <Image style={style.img} source={require('..//images/two.png')} />
        <Image style={style.img} source={require('..//images/three.png')} />
        <Image style={style.img} source={require('..//images/one.png')} />
        <Image style={style.img} source={require('..//images/three.png')} />
        <Image style={style.img} source={require('..//images/two.png')} />
      </ScrollView>

      {/* ///////////////////////////// */}

      <ScrollView style={style.vertical}>
        <View style={style.icon2}>
          <Image source={require('../images/cart-img3.png')} />
          <View>
            <Text style={style.text3}>Meet</Text>
          </View>
          <View style={style.kg_plue}>
            <Text style={style.text4}>800 kg</Text>
            <TouchableOpacity>
              <View style={style.plus}>
                <Image source={require('../images/+.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.icon2}>
          <Image source={require('../images/cart-img2.png')} />
          <View>
            <Text style={style.text3}>Meet</Text>
          </View>
          <View style={style.kg_plue}>
            <Text style={style.text4}>800 kg</Text>
            <TouchableOpacity>
              <View style={style.plus}>
                <Image source={require('../images/+.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.icon2}>
          <Image source={require('../images/cart-img1.png')} />
          <View>
            <Text style={style.text3}>Meet</Text>
          </View>
          <View style={style.kg_plue}>
            <Text style={style.text4}>800 kg</Text>
            <TouchableOpacity>
              <View style={style.plus}>
                <Image source={require('../images/+.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.icon2}>
          <Image source={require('../images/cart-img2.png')} />
          <View>
            <Text style={style.text3}>Meet</Text>
          </View>
          <View style={style.kg_plue}>
            <Text style={style.text4}>800 kg</Text>
            <TouchableOpacity>
              <View style={style.plus}>
                <Image source={require('../images/+.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.icon2}>
          <Image source={require('../images/cart-img3.png')} />
          <View>
            <Text style={style.text3}>Meet</Text>
          </View>
          <View style={style.kg_plue}>
            <Text style={style.text4}>800 kg</Text>
            <TouchableOpacity>
              <View style={style.plus}>
                <Image source={require('../images/+.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.icon2}>
          <Image source={require('../images/cart-img1.png')} />
          <View>
            <Text style={style.text3}>Meet</Text>
          </View>
          <View style={style.kg_plue}>
            <Text style={style.text4}>800 kg</Text>
            <TouchableOpacity>
              <View style={style.plus}>
                <Image source={require('../images/+.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    <View style = {style.bottomnavigation}> 
    <TouchableOpacity onPress={() => handler('home')}>
      <View style = {style.navigationbutton}>
        <Text style = {style.navtext}>Home</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handler('cartScreen')}>

      <View style = {style.navigationbutton}>
        <Text style = {style.navtext}>Cart</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handler('account')}>

      <View style = {style.navigationbutton}>
        <Text style = {style.navtext}>Account</Text>
      </View>
      </TouchableOpacity>
      </View>


    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  sylani: {
    width: '50%',
    resizeMode: 'contain',
  },
  h3: {
    paddingLeft: '5%',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: -10,
  },
  coverView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    resizeMode: 'contain',
    width: '95%',
  },
  search: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 40,
    marginTop: '5%',
    width: '90%',
    paddingLeft: 40,
  },
  searchInput: {
    marginTop: '3%',
    width: '85%',
    paddingLeft: 20,
  },

  ssimage: {
    paddingLeft: 50,
  },

  scrollimages: {
    marginVertical: 20,
  },
  img: {
    margin: 5,
  },
  kg_plue: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 15,
  },
  text3: {
    margin: 5,
    color: 'black',
    fontSize: 22,
  },

  text4: {
    color: 'black',
    fontSize: 16,
  },
  icon2: {
    margin: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomColor: 'green',
    borderRadius: 15,
    padding: 10,
  },
  vertical: {
    height: '40%',
  },


  bottomnavigation : {
    position :'absolute',
    marginVertical : 630,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    margin : 5,
    padding : 5
  },

  navigationbutton : {
    margin : 20,
   backgroundColor : "green",
   padding : 5,
   display : 'flex',
   flexDirection : 'row',
  },

  navtext : {
    fontWeight : 'bold',
    color : 'white',
    padding :20
  },

  

});
export default Cart;
