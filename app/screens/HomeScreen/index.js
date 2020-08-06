import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import commonStyles from '../../styles/commonStyles';

import Greeting from '../../shared/Greeting';
import Search from '../../shared/Search';
import DestinationCard from './DestinationCard';
import PredictionCard from './PredictionCard';
import LocationList from './LocationLists';
import Placeholder from '../../shared/Placeholder';
import LoadingSearch from '../../shared/Loading';
import SearchError from '../../shared/SearchError';

import { getSearchLocations, getLocationInformation } from '../../shared/routingRequest';

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.animationContainer}>
        <LottieView style={styles.loadingAnimation} source={require('../../assets/loading/loading-map.json')} autoPlay loop />
        <Text style={styles.loadingText}>Taking you there...</Text>
      </View>
    </View>
  )
}

const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState("");
  const [selectedLocations, setSelectedLocations] = useState("");
  const [returnedPrediction, setReturnedPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  onSearch = async (searchValues) => {
    //clear any previous selected locations before searching
    if (selectedLocations !== "") {
      setSelectedLocations("");
      setReturnedPrediction("");
      setSearchResults(""); 
    }
    setIsLoading(true);
    let returnedResults = await getSearchLocations(searchValues);
    setSearchResults(returnedResults);
    setIsLoading(false)
  }

  fetchDestinationData = async () => {
    if (selectedLocations !== "") {
      let returnedData = await getLocationInformation(selectedLocations);
      setReturnedPrediction(returnedData);
    };
  }

  clearAll = () => {
    setSearchResults("");
    setSelectedLocations("");
    setReturnedPrediction("");
  }

  useEffect(() => {
    if (returnedPrediction === "" || undefined) {
      fetchDestinationData();
    }
  })

  const SearchOperation = () => {
    return (
      <>
        {selectedLocations !== "" ?
          <>
            {returnedPrediction !== "" ?
              <Animatable.View animation="fadeIn" useNativeDriver={true}>
                <DestinationCard locationDetails={returnedPrediction[0]} />
                <PredictionCard predictedTime={returnedPrediction[1]} />
                <TouchableOpacity style={styles.clearResults} onPress={this.clearAll}>
                  <Text style={styles.clearText}>Clear Results</Text>
                </TouchableOpacity>
              </Animatable.View>
              :
              <Animatable.View animation="fadeIn" useNativeDriver={true} style={{flex: 1}}>
                <LoadingScreen />
              </Animatable.View>
            }
          </>
          :
          <>
            { Object.keys(searchResults[0].results).length !== 0 && Object.keys(searchResults[1].results).length !== 0 ?
              <LocationList displayData={searchResults} selectedPlaces={setSelectedLocations} />
              :
              <SearchError />
            }
          </>
        }
      </>
    )
  }

  return (
    <View style={styles.bodyContainer}>
      <Greeting />
      <View style={{ flex: 1 }}>
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
        {isLoading &&
          <View style={styles.loadingSearch}>
            <LoadingSearch />
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: commonStyles.white
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
  },
  loadingSearch: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
})

export default HomeScreen; 