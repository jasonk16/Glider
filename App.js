/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// import {
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import Header from './app/shared/Header';
import HomeScreen from './app/screens/HomeScreen';
import ErrorBoundary from './app/shared/ErrorBoundary';

import commonStyles from './app/styles/commonStyles';

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: commonStyles.backgroundOrange }} edges={['top']}>
          <ErrorBoundary>
            <Header />
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </ErrorBoundary>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
