import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../styles/commonStyles';

const PredictionCard = () => {
  return (
    <View style={styles.predictionBox}>
      <LinearGradient
        style={styles.cardGradient}
        colors={['#F9C823', '#FC506E']}
        start={{ x: 0, y: 2.5 }}
        end={{ x: 0.7, y: 1 }}>
        <View style={styles.routeColumn}>
          <Text style={styles.routeName}>via Route Name</Text>
        </View>
        <View style={styles.predictedColumn}>
          <Text style={styles.predictedTime}>40 mins</Text>
          <Text style={styles.predictedDistance}>20km</Text>
        </View>
      </LinearGradient>
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
  routeColumn: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 20
  },
  routeName: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: '#FFFFFF'
  },
  predictedColumn: {
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
  }
})
export default PredictionCard;