import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../styles/commonStyles';


const LocationCards = (props) => {

  let data = props.cardValues;

  return (
    <View style={styles.locationBox}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onSelect(data.place_id)}>
        <LinearGradient
          style={styles.cardGradient}
          colors={['#F9C823', '#FC506E']}
          start={{ x: 0, y: 2.5 }}
          end={{ x: 0.7, y: 1 }}>
          <View style={styles.textFormat}>
            <Text style={styles.locationTitle} numberOfLines={1} ellipsizeMode="tail">
              {data.name}
              </Text>
            <Text style={styles.locationAddress} numberOfLines={2} ellipsizeMode="tail">
              {data.formatted_address}
                </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  locationBox: {
    height: 100,
    paddingTop: 10
  },
  cardGradient: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center'
  },
  textFormat: {
    marginLeft: '6%',
    marginRight: '6%'
  },
  locationTitle: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20,
    color: commonStyles.white
  },
  locationAddress: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: commonStyles.white
  }
})

export default LocationCards; 