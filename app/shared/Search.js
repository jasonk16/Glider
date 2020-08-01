import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

import commonStyles from '../styles/commonStyles';

const Search = (props) => {

  const [originValue, originOnChangeText] = React.useState("");
  const [destValue, destOnChangeText] = React.useState("");

  SubmitForm = () => {
    props.onSearch({
      "originValue": originValue,
      "destValue": destValue
    })
  }

  return (
    <>
      <View style={styles.textBoxContainer}>
        <View style={styles.textBoxInput}>
          <Text style={styles.textBoxTitle}>From</Text>
          <View style={styles.textInputBorder}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter starting point"
              placeholderTextColor={commonStyles.lightBrown}
              onChangeText={text => originOnChangeText(text)}
              value={originValue} />
          </View>
        </View>
        <View style={styles.textBoxInput}>
          <Text style={styles.textBoxTitle}>To</Text>
          <View style={styles.textInputBorder}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter destination"
              placeholderTextColor={commonStyles.lightBrown}
              onChangeText={text => destOnChangeText(text)}
              value={destValue} />
          </View>
        </View>
      </View>
      <View style={styles.searchSection}>
        <TouchableOpacity onPress={() => SubmitForm()}>
          <View style={styles.buttonDesign}>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  textBoxContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textBoxInput: {
    flex: 1,
    paddingTop: 15,
    width: '80%',
  },
  textInputBorder: {
    borderBottomColor: commonStyles.themeOrange,
    borderBottomWidth: 1,
    width: '100%'
  },
  inputField: {
    fontSize: 18,
    alignSelf: 'auto',
    color: commonStyles.textBrown,
    fontFamily: 'SourceSansPro-Regular',
    marginLeft: 10,
    marginTop: 5
  },
  textBoxTitle: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 16,
    color: commonStyles.textBrown,
  },
  searchSection: {
    alignItems: 'flex-end',
    paddingRight: '15%',
    paddingTop: 10
  },
  buttonDesign: {
    height: 35,
    width: 100,
    backgroundColor: commonStyles.themeOrange,
    borderColor: commonStyles.themeOrange,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: commonStyles.white,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18
  }
})

export default Search; 