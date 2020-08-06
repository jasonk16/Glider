import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import commonStyles from '../styles/commonStyles';
import { getTraffic } from './routingRequest';

class Greeting extends Component {

  constructor() {
    super();
    this.state = {
      greetingText: "",
      trafficStatus: "Clear",
      localArea: ""
    }
  }

  componentDidMount() {
    this.getTime();
    this.getTrafficDetails();
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

  async getTrafficDetails() {
    let long = -0.118092;
    let lat = 51.509865;
    let trafficSpeed = await getTraffic(long, lat);

    if (trafficSpeed.area) {
      this.setState({
        localArea: trafficSpeed.area
      })
    }

    if (trafficSpeed) {
      let normalSpeed = trafficSpeed.normalSpeed;
      let currentSpeed = trafficSpeed.actualSpeed;

      let speedDifference = Math.abs(normalSpeed - currentSpeed);
      if (speedDifference <= normalSpeed / 100 * 30) {
        this.setState({
          trafficStatus: "Slow"
        })
      }
      else if (speedDifference <= normalSpeed / 100 * 60) {
        this.setState({
          trafficStatus: "Moderate"
        })
      }
      else {
        this.setState({
          trafficStatus: "Clear"
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.state.greetingText}</Text>
        <View style={styles.statusText}>
          {this.state.localArea ?
            <>
              <Text style={styles.statusLocation}>Traffic in {this.state.localArea}: </Text>
              <View style={styles.statusCircle}></View>
              <Text style={styles.statusReport}>{this.state.trafficStatus}</Text>
            </>
            :
            <Text style={styles.statusLocation}>Getting traffic conditions... </Text>
          }
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