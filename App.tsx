import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts} from 'expo-font';
import {Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium,Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import {Home} from './src/screens/Home';
import {Background} from './src/components/Background';

export default function App() {
 const [fontsloaded] =  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsloaded){
    return (
    <AppLoading/>
    );
  }
  Background
  return (
    <Background>
    <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
            />
    <Home/>
    </Background>
  );
}
