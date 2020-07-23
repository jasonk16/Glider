import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../styles/commonStyles';

const DestinationCard = () => {
  return (
    <View style={styles.boxContainer}>
      <LinearGradient
        style={styles.gradientBox}
        colors={['#F9C823', '#FC506E']}
        start={{ x: 0, y: 1.3 }}
        end={{ x: 0.7, y: 1 }}>
        <View style={styles.displayBox}>
          <View style={styles.destinationTextBox}>
            <View style={{ flex: 2 }}>
              <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
                Petronas Twin Towers
              </Text>
              <Text style={styles.cardDesc} numberOfLines={2} ellipsizeMode="tail">
                This is a sample description that describes the features of the destination.
              </Text>
              <View style={styles.addressSection}>
                <Image source={require('../../assets/displaycard/address-icon.png')} />
                <Text style={styles.infoText} numberOfLines={2} ellipsizeMode="tail">
                  Kuala Lumpur City Center, 50088, Kuala Lumpur, Malaysia.
                </Text>
              </View>
              <View style={styles.phoneSection}>
                <Image source={require('../../assets/displaycard/phone-icon.png')} />
                <Text style={styles.infoText}>+60 30954892</Text>
              </View>
            </View>
            <View style={styles.operatingHours}>
              <Text style={styles.openStatus}>OPENS SOON</Text>
              <Text style={styles.openTimes}>10 am - 10 pm</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    height: 190,
    margin: '6%'
  },
  gradientBox: {
    flex: 1,
    borderRadius: 8
  },
  displayBox: {
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    margin: 3,
    flex: 1
  },
  destinationTextBox: {
    margin: '4%',
    flexDirection: 'row'
  },
  cardTitle: {
    fontFamily: 'SourceSansPro-Black',
    fontSize: 20,
    color: commonStyles.textBrown
  },
  cardDesc: {
    fontFamily: 'SourceSansPro-Regular',
    color: commonStyles.textBrown,
    marginTop: 5
  },
  addressSection: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    fontFamily: 'SourceSansPro-Regular',
    color: commonStyles.textBrown,
    marginLeft: 15
  },
  phoneSection: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  operatingHours: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  openStatus: {
    fontFamily: 'SourceSansPro-Bold',
    color: commonStyles.textBrown
  },
  openTimes: {
    fontFamily: 'SourceSansPro-Regular',
    color: commonStyles.textBrown
  }
})

export default DestinationCard; 