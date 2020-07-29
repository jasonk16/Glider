import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import commonStyles from '../../styles/commonStyles';

import Greeting from '../../shared/Greeting';
import Search from '../../shared/Search';
import DestinationCard from './DestinationCard';
import PredictionCard from './PredictionCard';
import LocationList from './LocationLists';

const HomeScreen = () => {

  const [searchResults, setSearchResults] = useState("");
  const [selectedLocations, setSelectedLocation] = useState("");

  onSearch = async (searchValues) => {
    try {
      let response = await fetch('https://tdihjytyz2.execute-api.us-east-1.amazonaws.com/glider-location-requests-dev-hello', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: searchValues.originValue,
          dest: searchValues.destValue
        })
      })
      let json = await response.json()
      setSearchResults(json.responseJson.data);
    }
    catch (error) {
      console.log(error)
    }
  }

  //reset search results once selected locations are returned. will cause infinite loop in LocationList if removed.
  useEffect(() => {
    if (selectedLocations !== "") {
      setSearchResults("")
      console.log("selectedLocations", selectedLocations)
    }
  })

  return (
    <View style={styles.bodyContainer}>
      <Greeting />
      <Text style={styles.bodyTitle}>Where would you like to go? </Text>
      <View style={styles.inputSection}>
        <Search onSearch={this.onSearch} />
      </View>
      <View style={styles.infoDisplaySection}>
        {(searchResults !== "") ?
          (
            <>
              <LocationList displayData={searchResults} selectedPlaces={setSelectedLocation} />
            </>
          ) :
          (
            <>
              <DestinationCard />
              <PredictionCard />
            </>
          )
        }
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