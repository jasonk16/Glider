import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import commonStyles from '../../styles/commonStyles';

import LocationCards from './LocationCards';

const LocationList = (props) => {

  //Get value from card component
  const [selectedValue, setSelectedValue] = useState("");

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

    if (selectedValue !== "") {
      if (allResults.type === 'Source') {
        setSelectedSource(selectedValue);
      }
      else if (allResults.type === 'Dest') {
        setSelectedDest(selectedValue);
      }
      else {
        console.log("Error parsing type.");
      }
    }
    returnValues();
  })

  updateValues = (selectedSingleValues) => {
    setSelectedValue(selectedSingleValues);
    setDisplayFlag(false);
  }

  returnValues = () => {
    if (selectedSource, selectedDest !== "" && selectedSource !== selectedDest) {
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
            <ScrollView alwaysBounceVertical={true} keyboardShouldPersistTaps={'handled'}>
              {
                allResults.results.map((values, i) => {
                  return (
                    <LocationCards key={i + 1} onSelect={this.updateValues} cardValues={values} />
                  )
                })
              }
            </ScrollView>
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