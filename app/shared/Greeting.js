import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import commonStyles from '../styles/commonStyles';

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Good Morning</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: commonStyles.backgroundOrange,
    flexDirection: 'row',
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'SourceSansPro-Black'
  }
})

export default Greeting; 