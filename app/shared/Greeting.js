import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import commonStyles from '../styles/commonStyles';

class Greeting extends Component {

  constructor() {
    super();
    this.state = {
      greetingText: ""
    }
  }

  componentDidMount() {
    this.getTime();
  }

  getTime() {
    let date = new Date();
    let hourOfDay = date.getHours();

    if (hourOfDay < 12) {
      this.setState({
        greetingText: "Good Morning"
      })
    }
    else if (hourOfDay < 16) {
      this.setState({
        greetingText: "Good Afternoon"
      })
    }
    else if (hourOfDay < 24) {
      this.setState({
        greetingText: "Good Evening"
      })
    }
    else {
      this.setState({
        greetingText: "Hey there"
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.state.greetingText}</Text>
        <View style={styles.statusText}>
          <Text style={styles.statusLocation}>Traffic in KLCC: </Text>
          <View style={styles.statusCircle}></View>
          <Text style={styles.statusReport}>Clear</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyles.backgroundOrange,
    width: '100%',
    height: '14%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'SourceSansPro-Black',
    fontSize: 38,
    color: commonStyles.white
  },
  statusText: {
    flexDirection: 'row',
    paddingTop: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusLocation: {
    color: commonStyles.white,
    fontSize: 18
  },
  statusCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: commonStyles.green,
    backgroundColor: commonStyles.greenRGBA, 
    borderWidth: 3
  },
  statusReport: {
    color: commonStyles.white,
    fontSize: 18,
    fontFamily: 'SourceSansPro-Bold',
    marginLeft: 8
  }
})

export default Greeting; 