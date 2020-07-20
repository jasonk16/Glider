import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import commonStyles from '../styles/commonStyles';
import Greeting from '../shared/Greeting';

const HomeScreen = () => {

  const [originValue, originOnChangeText] = React.useState("Enter Origin");
  const [destValue, destOnChangeText] = React.useState("Enter Destination");
  return (
    <View style={styles.bodyContainer}>
      <Greeting />
      <Text style={styles.bodyTitle}>Where would you like to go? </Text>
      <View style={styles.inputSection}>
        <View style={styles.textBoxInput}>
          <View style={styles.textInputBorder}>
            <TextInput
              style={styles.inputField}
              onChangeText={text => originOnChangeText(text)}
              value={originValue} />
          </View>
        </View>
        <View style={styles.textBoxInput}>
          <View style={styles.textInputBorder}>
            <TextInput
              style={styles.inputField}
              onChangeText={text => destOnChangeText(text)}
              value={destValue} />
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text>Another section</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bodyTitle: {
    color: commonStyles.textBrown,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    paddingTop: '4%',
    paddingLeft: '5%'
  },
  inputSection: {
    flex: 1,
    height: '20%'
  },
  textBoxInput: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '3%'
  },
  textInputBorder: {
    borderBottomColor: commonStyles.themeOrange,
    borderBottomWidth: 1,
    width: '70%',
  },
  inputField: {
    fontSize: 18,
    alignSelf: 'auto',
    color: commonStyles.textBrown,
    fontFamily: 'SourceSansPro-Regular',
    marginLeft: 10
  }
})

export default HomeScreen; 