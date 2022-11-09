import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const DetailScreen = ({navigation, route}) => {
  const plant = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}></View>
        <View style={style.namepriceContainer}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={style.priceTxt}>
              ₺{plant.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hakkında</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 18,
              lineHeight: 25,
              marginTop: 10,
              fontFamily: 'TimesNewRomanPSMT',
            }}>
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text style={style.number}>1</Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={style.buyBtn}>
              <TouchableOpacity>
                <Text style={style.buyBtnText}>Satın Al</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  namepriceContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 0.6,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 45,
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  number: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  buyBtn: {
    width: 130,
    height: 45,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buyBtnText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  priceTxt:{
    marginLeft: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default DetailScreen;
