import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import plants from '../consts/plants';

const width = Dimensions.get('screen').width / 2 - 30;

const HomeScreen = ({navigation}) => {

  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPÜLER', 'SUKULENT', 'AĞAÇ', 'YAPAY'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Detail', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(234, 157, 173, 0.8)'
                  : 'rgba(0,0,0,0.2)',
              }}>
              <Icon
                name="favorite"
                size={16}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>
          <View style={style.plantContainer}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>
          <Text style={style.plantNameTxt}>{plant.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={style.priceIcon}>{plant.price}₺</Text>
            <View style={style.addContainer}>
              <Text style={style.addIcon}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View style={{marginLeft: 15}}>
          <Text style={style.welcomeTxt}>Hoşgeldiniz</Text>
          <Text style={style.nameTxt}>Sera Botanik</Text>
        </View>
        <Icon name="shopping-cart" size={30} style={{marginRight: 15}} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Arama Yap"
            style={style.input}
            placeholderTextColor="#C0BEBE"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    margin: 18,
    justifyContent: 'space-between',
  },
  welcomeTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy-Bold',
  },
  nameTxt: {
    fontSize: 38,
    color: COLORS.green,
    fontWeight: 'bold',
    fontFamily: 'Chalkduster',
  },
  plantContainer: {
    height: 100,
    alignItems: 'center',
  },
  plantNameTxt: {
    //fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Cochin',
  },
  addContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.green,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 22,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  priceIcon: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 15,
    color: COLORS.green,
    fontFamily: 'Noteworthy-Bold',
  },
  categoryTextSelected: {
    color: COLORS.dark,
    borderColor: COLORS.green,
  },
  card: {
    height: 230,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 15,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
    padding: 12,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
    color: 'black',
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
