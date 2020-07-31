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

const LoadingScreen = () => {
  return(
    <View>
      <Text>Loading...</Text>
    </View>
  )
}

const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState("");
  const [selectedLocations, setSelectedLocations] = useState("");
  const [returnedPrediction, setReturnedPrediction] = useState("");

  onSearch = async (searchValues) => {
    //clear any previous selected locations
    if (selectedLocations !== "") {
      setSelectedLocations("");
    }
    let returnedResults = await getSearchLocations(searchValues);
    setSearchResults(returnedResults);
  }

  fetchDestinationData = async () => {
    //clear searchResults if want to return to original page
    if (selectedLocations !== "") {
      let returnedData = await getLocationInformation(selectedLocations);
      setReturnedPrediction(returnedData);
      //set state using the returned data
      //clear selectedLocations. (or clear tgt with searcResults when user clicks back) 
    };
  }

  useEffect(() => {
    if (returnedPrediction === "") {
      fetchDestinationData();
    }
  })

  const SearchOperation = () => {
    return (
      <>
        {selectedLocations !== "" ?
          <>
            {returnedPrediction !== "" ?
              <>
                <DestinationCard locationDetails={returnedPrediction[0]} />
                <PredictionCard predictedTime={returnedPrediction[1]} />
              </>
              :
              <>
                <LoadingScreen />
              </>
            }
          </>
          :
          <LocationList displayData={searchResults} selectedPlaces={setSelectedLocations} />
        }
      </>
    )
  }

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