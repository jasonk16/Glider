import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import commonStyles from '../styles/commonStyles';
import { getTraffic } from './routingRequest';

class Greeting extends Component {

  constructor() {
    super();
    this.state = {
      greetingText: "",
      trafficStatus: "Clear",
      localArea: "",
      locationMessage: "Loading location...",
      indicatorColor: "rgba(128, 185, 24, .5)",
      indicatorBorder: "#80b918"
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      async (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude
        await this.getTrafficDetails(lat, long);
      },
      (error) => {
        console.log(error.code, error.message);
        this.setState({
          locationMessage: "Unable to get location"
        })
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
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

  async getTrafficDetails(lat, long) {
    if (long && lat) {
      let trafficSpeed = await getTraffic(long, lat);
      if (trafficSpeed.area) {
        this.setState({
          localArea: trafficSpeed.area
        })
      }

      if (trafficSpeed) {
        let normalSpeed = parseInt(trafficSpeed.normal_speed);
        let currentSpeed = parseInt(trafficSpeed.actual_speed);

        if (currentSpeed <= normalSpeed / 100 * 30) {
          this.setState({
            trafficStatus: "Congestion",
            indicatorBorder: 'rgba(189, 49, 83, 0.5)',
            indicatorColor: '#bd3153'
          })
        }
        else if (currentSpeed <= normalSpeed / 100 * 60) {
          this.setState({
            trafficStatus: "Moderate",
            indicatorBorder: 'rgba(233, 137, 24,0.5)',
            indicatorColor: '#e98918'
          })
        }
        else {
          this.setState({
            trafficStatus: "Normal"
          })
        }
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
              <View style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                borderColor: this.state.indicatorBorder,
                backgroundColor: this.state.indicatorColor,
                borderWidth: 3
              }}></View>
              <Text style={styles.statusReport}>{this.state.trafficStatus}</Text>
            </>
            :
            <Text style={styles.statusLocation}>{this.state.locationMessage}</Text>
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
  statusReport: {
    color: commonStyles.white,
    fontSize: 18,
    fontFamily: 'SourceSansPro-Bold',
    marginLeft: 8
  }
})

export default Greeting; 