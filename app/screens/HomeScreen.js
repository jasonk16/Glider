import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.sampleText}>
      <Text>Glide your way through the traffic </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sampleText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HomeScreen; 