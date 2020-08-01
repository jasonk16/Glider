import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import commonStyles from '../../styles/commonStyles';

import Greeting from '../../shared/Greeting';
import Search from '../../shared/Search';
import DestinationCard from './DestinationCard';
import PredictionCard from './PredictionCard';
import LocationList from './LocationLists';
import Placeholder from '../../shared/Placeholder';

import { getSearchLocations, getLocationInformation } from './routingRequest';

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.animationContainer}>
        <LottieView style={styles.loadingAnimation} source={require('../../assets/loading-map.json')} autoPlay loop />
        <Text style={styles.loadingText}>Taking you there...</Text>
      </View>
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

  clearAll = () => {
    setSearchResults("");
    setSelectedLocations("");
    setReturnedPrediction("");
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
                <TouchableOpacity style={styles.clearResults} onPress={this.clearAll}>
                  <Text style={styles.clearText}>Clear Results</Text>
                </TouchableOpacity>
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
    marginTop: '2%',
  },
  clearResults: {
    alignItems: 'flex-end',
    marginRight: '6%',
    paddingTop: '4%'
  },
  clearText: {
    color: commonStyles.themeOrange,
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20,
    textDecorationLine: 'underline', 
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingAnimation: {
    height: 200,
    width: 200
  },
  loadingText: {
    color: '#FDB535',
    fontFamily: 'SourceSansPro-Black',
    fontSize: 25
  }
})

export default HomeScreen; 