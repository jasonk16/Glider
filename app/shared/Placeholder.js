import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Placeholder = () => {
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.imageLayout} source={require('../assets/city-image.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 20,
  },
  imageLayout: {
    resizeMode: 'stretch',
    height: '100%'
  }
})

export default Placeholder; 