/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import Providers from './navigation/Providers';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, StatusBar } from '@react-navigation/native';

const CustomStatusBar =({

  backgroundColor,barStyle = 'dark-content',
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style= {{height:insets.top, backgroundColor}}>
      <StatusBar
        animated = {true}
        backgroundColor = {backgroundColor}
        barStyle = {barStyle} />
    </View>
  )
}
export default function App() {
  return (
    <SafeAreaProvider>
      {/* <CustomStatusBar backgroundColor= "#FFFF"/> */}
      <Providers/>
    </SafeAreaProvider>
  );
}