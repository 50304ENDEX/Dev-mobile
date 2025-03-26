import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componente/PrimeiroComponente';
import SegundoCOmponente from './componente/SegundoComponente';
import TerceiroComponente from './componente/TerceiroComponente';
import JavascriptComponente from './componente/JavascriptComponente';
import Perfil from './componente/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente/>
      <Text/>
      <SegundoCOmponente/>
      <Text/>
      <TerceiroComponente/>
      <Text/>
      <JavascriptComponente/>
      <Text/>

      <Perfil 
        nome="Lucas"
        idade="22"
        email="lucasb@gamil.com"
      />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
