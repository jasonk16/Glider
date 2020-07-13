import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const isLandscape =() => {
  let dim = Dimensions.get('screen')
  return dim.width >= dim.height; 
}

const Header = () => {
  return (
    <View style={[styles.header, isLandscape() ? styles.headerHeightLandscape : styles.headerHeightPortrait]}>
      <Image style={styles.appIcon} source={require('../assets/logo-white.png')} />
      <View>
        <Image style={styles.navMenu} source={require('../assets/hamburger-menu.png')} />
      </View>
      {console.log("ILS",isLandscape())}
    </View>
  )
}

const styles = StyleSheet.create({
  headerHeightPortrait: {
    height: '6%'
  },
  headerHeightLandscape: {
    height: '12%'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFA640',
    justifyContent: 'space-between'
  },
  appIcon: {
    width: 55,
    height: 55,
    marginLeft: '7%'
  },
  navMenu: {
    width: 40,
    height: 40,
    marginRight: '7%'
  }
})

export default (Header); 