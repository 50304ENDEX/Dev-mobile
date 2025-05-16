import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


import NomeNumero from './componetes/NomeNumero';
import Controle from './componetes/Controle';
import NumeroAleatorio from './componetes/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
      <NumeroAleatorio/>
      <NomeNumero/>
      <Controle/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
