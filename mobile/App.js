import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    const nome = "Lucas"

    function alerta(){
      alert("Clicou no botão")
    }


  return (
    <View style={styles.container}>
        <text>hello world</text>
        <StatusBar style='auto' />

        
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
