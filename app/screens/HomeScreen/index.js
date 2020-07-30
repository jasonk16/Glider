import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import commonStyles from '../../styles/commonStyles';

import Greeting from '../../shared/Greeting';
import Search from '../../shared/Search';
import DestinationCard from './DestinationCard';
import PredictionCard from './PredictionCard';
import LocationList from './LocationLists';
import Placeholder from '../../shared/Placeholder';

import { getSearchLocations, getLocationInformation } from './routingRequest';

const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState("");
  const [selectedLocations, setSelectedLocations] = useState("");

  onSearch = async (searchValues) => {
    if (selectedLocations !== ""){
      setSelectedLocations("");
    }
    let returnedResults = await getSearchLocations(searchValues);
    setSearchResults(returnedResults);
  }

  onSelect = () => {
    //let locationDetails = getLocationInformation(selectedValues.dest); 
    // setSelectedLocation(""); //so the search will work again
  }

  const SearchOperation = () => {
    return (
      <>
        {
          selectedLocations !== "" ?
            <>
              <DestinationCard />
              <PredictionCard />
            </>
            :
            <LocationList displayData={searchResults} selectedPlaces={setSelectedLocations} />
        }
      </>
    )
  }

  useEffect(() => {
    //clear searchResults if want to return to original page
    // if (selectedLocations != ""){
    //   setSearchResults("");
    // }
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
              <SearchOperation />
            </>
          ) :
          (
            <>
              <Placeholder />
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