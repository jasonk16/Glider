import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import commonStyles from '../styles/commonStyles';

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Good Afternoon</Text>
      <View style={styles.statusText}>
        <Text style={styles.statusLocation}>Traffic in KLCC: </Text>
        <Image style={styles.statusIndicator} source={require('../assets/greetingheader/Ellipse.png')} />
        <Text style={styles.statusReport}>Clear</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyles.backgroundOrange,
    width: '100%',
    height: '14%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'SourceSansPro-Black',
    fontSize: 38,
    color: commonStyles.white
  },
  statusText: {
    flexDirection: 'row',
    paddingTop: '2%'
  },
  statusLocation:{
    color: commonStyles.white,
    fontSize: 18
  },
  statusIndicator: {
    marginRight: '3%',
    marginLeft: '3%',
    alignItems: 'flex-end'
  },
  statusReport: {
    color: commonStyles.white,
    fontSize: 18,
    fontFamily: 'SourceSansPro-Bold',
  }
})

export default Greeting; 