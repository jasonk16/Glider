import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import commonStyles from '../styles/commonStyles';
import Greeting from '../shared/Greeting'; 

const HomeScreen = () => {

  const[value, onChangeText] = React.useState("Enter Text"); 
  console.log(value)
  return (
    <View style={styles.bodyContainer}>
      <Greeting />
      <Text style={styles.bodyTitle}>Where would you like to go? </Text>
      <TextInput 
      style={styles.textBox}
      onChangeText={text => onChangeText(text)} 
      value={value}/>
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
  textBox: {

  }
})

export default HomeScreen; 