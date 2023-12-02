import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenHome } from './src/Screens/ScrenHome';

export default function App() {
  return (
    <View className="pt-12 px-3 flex-1 items-center space-y-4">
      <ScreenHome/>
      <ScreenHome/>
      <ScreenHome/>
      <ScreenHome/>
    </View>
  );
}