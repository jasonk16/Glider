import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, ImagePropTypes } from 'react-native';

import commonStyles from '../../styles/commonStyles';

import Greeting from '../../shared/Greeting';
import Search from '../../shared/Search';
import DestinationCard from './DestinationCard';
import PredictionCard from './PredictionCard';

const HomeScreen = () => {

  onSearch = (searchValues) => {
    console.log(searchValues.originValue,",",searchValues.destValue)
  }

  return (
    <View style={styles.bodyContainer}>
      <Greeting />
      <Text style={styles.bodyTitle}>Where would you like to go? </Text>
      <View style={styles.inputSection}>
        <Search onSearch={this.onSearch} />
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
    flex: 3,
  },
  infoDisplaySection: {
    flex: 6,
    marginTop: '2%'
  }
})

export default HomeScreen; 