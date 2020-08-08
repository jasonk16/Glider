import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../styles/commonStyles';

const PredictionCard = (props) => {

  const [indicatorColor, setIndicatorColor] = useState("rgba(128, 185, 24, .5)");
  const [indicatorBorder, setIndicatorBorder] = useState("#80b918");
  let data = props.predictedTime;

  useEffect(() => {
    if (data.route_distance && data.predicted_time) {
      let distance = parseInt(data.route_distance);
      let time = parseInt(data.predicted_time) / 60;
      let speed = (distance / time);

      if (speed <= 40) {
        setIndicatorColor("rgba(189, 49, 83, .5)");
        setIndicatorBorder("#bd3153");
      }
      else if (speed > 40 && speed <= 60) {
        setIndicatorColor("rgba(255, 209, 102,.5)");
        setIndicatorBorder("#ffd166");
      }
      else {
        setIndicatorColor("rgba(128, 185, 24, .5)");
        setIndicatorBorder("#80b918");
      }
    }
  })

  return (
    <View style={styles.predictionBox}>
      {data.route_name && data.predicted_time && data.route_distance ?
        <LinearGradient
          style={styles.cardGradient}
          colors={['#F9C823', '#FC506E']}
          start={{ x: 0, y: 2.5 }}
          end={{ x: 0.7, y: 1 }}>
          <View style={styles.indicatorColumn}>
            <View style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              borderColor: indicatorBorder,
              backgroundColor: indicatorColor,
              borderWidth: 3
            }}></View>
          </View>
          <View style={styles.routeColumn}>
            <Text style={styles.routeName} numberOfLines={1} ellipsizeMode="tail">via {data.route_name}</Text>
          </View>
          <View style={styles.predictedColumn}>
            <Text style={styles.predictedTime}>{data.predicted_time}</Text>
            <Text style={styles.predictedDistance}>{data.route_distance}</Text>
          </View>
        </LinearGradient>
        :
        <LinearGradient
          style={styles.cardGradient}
          colors={['#F9C823', '#FC506E']}
          start={{ x: 0, y: 2.5 }}
          end={{ x: 0.7, y: 1 }}>
          <View style={styles.errorColumn}>
            <Text style={styles.routeName}>Unable to get prediction. Please try refining your search.</Text>
          </View>
        </LinearGradient>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  predictionBox: {
    height: 80,
    marginLeft: '6%',
    marginRight: '6%'
  },
  cardGradient: {
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
  },
  indicatorColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30
  },
  trafficIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: commonStyles.green,
    backgroundColor: commonStyles.greenRGBA,
    borderWidth: 3
  },
  routeColumn: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 20
  },
  routeName: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: '#FFFFFF'
  },
  predictedColumn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20
  },
  predictedTime: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 23,
    color: '#FFFFFF'
  },
  predictedDistance: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: '#FFFFFF'
  },
  errorColumn: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  }
})
export default PredictionCard;