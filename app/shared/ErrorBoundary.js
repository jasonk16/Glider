import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import RNRestart from 'react-native-restart';
import commonStyles from '../styles/commonStyles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  restartApp = () => {
    RNRestart.Restart()
  }

  componentDidCatch(error, errorInfo) {
    console.log("Component error: ", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Image style={styles.imageMessage} source={require('../assets/broken.png')} />
          <Text style={styles.titleText}>Opps, this is embarrassing :(</Text>
          <Text style={styles.subtitleText}>Something's not right on our end but rest assured we're working on it! For now, tap Reload to start over.</Text>
          <TouchableOpacity style={styles.touchablePadding} onPress={this.restartApp}>
            <View style={styles.reloadButton}>
              <Text style={styles.buttonText}>Reload</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    return (this.props.children);
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  imageMessage: {
    width: 200,
    height: 200,
    resizeMode: 'cover'
  },
  titleText: {
    color: commonStyles.white,
    fontFamily: 'SourceSansPro-Black',
    fontSize: 35
  },
  subtitleText: {
    color: commonStyles.white,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    paddingTop: 10
  },
  touchablePadding: {
    paddingTop: 25
  },
  reloadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: commonStyles.white,
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 2,
    height: 35,
    width: 100
  },
  buttonText: {
    color: commonStyles.white,
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 16
  }
})

export default ErrorBoundary; 