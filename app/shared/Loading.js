import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingSearch = () => {
  let textSample = {
    text: [
      "Wonder often, wonder always",
      "What's new in your area?",
      "Going through every corner...",
      "Embrace the detours..."
    ]
  }

  const textArray = textSample.text; 
  let pickedText = textArray[Math.floor(Math.random()* textArray.length)] 

  return (
    <>
    <View style={styles.loadContainer}>
      <LottieView style={styles.searchingAnimation} source={require('../assets/loading/loading-search.json')} autoPlay loop />
    </View>
      <Text style={styles.loadingText}>{pickedText}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  loadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  searchingAnimation: {
    height: 300,
    width: 300,
  },
  loadingText: {
    color: '#FDB535',
    fontFamily: 'SourceSansPro-Black',
    fontSize: 25,
    alignSelf: 'center',
    paddingBottom: '10%',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default LoadingSearch; 