import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native';
import commonStyles from '../../styles/commonStyles';

import LocationCards from './LocationCards';

const LocationList = (props) => {

  // const fadeAnim = useRef(new Animated.Value(0)).current
  const [fadeValue , setFadeValue] = useState(new Animated.Value(0))

  const [allResults, setAllResults] = useState();
  const [displayFlag, setDisplayFlag] = useState(false);

  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDest, setSelectedDest] = useState("");

  let data = props.displayData;

  useEffect(() => {
    let originResults = data[0];
    let destResults = data[1];

    if (selectedSource === "") {
      setAllResults(originResults);
      setDisplayFlag(true);
    }
    else if (selectedSource !== "" && selectedDest === "") {
      setAllResults(destResults);
      setDisplayFlag(true);
    }
    else {
      console.log("Error processing origin, destination");
    }
    returnValues();
    if (displayFlag === true) {
      animationStart();
    }
  })

  animationStart = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  updateValues = (selectedSingleValues) => {
    if (allResults.type === "Source") {
      setSelectedSource(selectedSingleValues);
    }
    else if (allResults.type === "Dest") {
      setSelectedDest(selectedSingleValues);
    }
    else {
      console.log("Error parsing type.");
    }
    setDisplayFlag(false);
  }

  returnValues = () => {
    if (selectedSource, selectedDest !== "" && selectedSource !== selectedDest) {
      setAllResults();
      return (
        props.selectedPlaces({
          origin_id: selectedSource.place_id,
          origin_loc: selectedSource.location,
          dest_id: selectedDest.place_id,
          dest_loc: selectedDest.location
        })
      )
    }
  }

  return (
    <View style={styles.listContainer}>
      {displayFlag &&
        <>
          <Text style={styles.sectionTitle}>Select {allResults.type === 'Source' ? 'Starting Point' : 'Destination'}: </Text>
          <View style={{ flex: 1 }}>
            <Animated.ScrollView style={{ opacity: fadeValue }} alwaysBounceVertical={true} keyboardShouldPersistTaps={'handled'}>
              {
                allResults.results.map((values, i) => {
                  return (
                    <LocationCards key={i + 1} onSelect={this.updateValues} cardValues={values} />
                  )
                })
              }
            </Animated.ScrollView>
          </View>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: '5%',
    marginLeft: '6%',
    marginRight: '6%'
  },
  sectionTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: commonStyles.textBrown
  }
})

export default LocationList; 