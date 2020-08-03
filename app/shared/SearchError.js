import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import commonStyles from '../styles/commonStyles';


const SearchError = () => {
  return (
    <View style={styles.errorContainer}>
      <Image style={styles.imageStyle} source={require('../assets/signboard.png')} />
      <Text style={styles.textTitle}>Opps, location not found :(</Text>
      <Text style={styles.textDesc}>Try refining your search. </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 6
  },
  imageStyle: {
    resizeMode: 'cover',
    width: '50%',
    height: '50%'
  },
  textTitle: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 25,
    color: commonStyles.themeOrange,
    paddingTop: 10
  },
  textDesc: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: commonStyles.themeOrange,
    alignSelf: 'center'
  }
})

export default SearchError; 