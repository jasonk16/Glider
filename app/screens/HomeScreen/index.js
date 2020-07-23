import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import commonStyles from '../../styles/commonStyles';

import Greeting from '../../shared/Greeting';
import Search from '../../shared/Search';
import DestinationCard from './DestinationCard';
import PredictionCard from './PredictionCard'; 

const HomeScreen = () => {
  return (
    <View style={styles.bodyContainer}>
      <Greeting />
      <Text style={styles.bodyTitle}>Where would you like to go? </Text>
      <View style={styles.inputSection}>
        <Search />
      </View>
      <View style={styles.infoDisplaySection}>
        <DestinationCard />
        <PredictionCard />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  bodyTitle: {
    color: commonStyles.textBrown,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    paddingTop: '4%',
    paddingLeft: '5%'
  },
  inputSection: {
    flex: 2,
  },
  infoDisplaySection: {
    flex: 5,
    marginTop: '2%'
  }
})

export default HomeScreen; 