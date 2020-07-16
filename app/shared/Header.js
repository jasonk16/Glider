import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

import commonStyles from '../styles/commonStyles';

const Header = () => {

  const { landscape } = useDeviceOrientation();

  return (
    <View style={[styles.header], { height: landscape ? '12%' : '6%' }}>
      <Image style={styles.appIcon} source={require('../assets/logo-white.png')} />
      <View>
        <Image style={styles.navMenu} source={require('../assets/hamburger-menu.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: commonStyles.backgroundOrange,
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