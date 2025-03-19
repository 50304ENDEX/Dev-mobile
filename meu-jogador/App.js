import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, ScrollView, View } from "react-native";

export default function App() {
  const nomejogador = "Messi";

  function alerta() {
    alert("Gol do Melhor!!!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Text style={styles.nomejogador}>{nomejogador}</Text>
        
        <Text style={styles.info}>Ano de Nascimento: 24 de junho de 1987</Text>
        <Text style={styles.info}>Time: Inter de Miami</Text>
        <Text style={styles.info}>Títulos: 34</Text>
        <Text style={styles.info}>Premios: 8</Text>
        <Text style={styles.info}>Idade: 37 anos</Text>
        
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/ed/81/b9/ed81b98bb0ad3a91bcae7a5515610926.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/1e/d3/f4/1ed3f435a1c51e368101ae8ef71815b8.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/80/48/60/8048606ad32cc1a8efc57e0646610ad6.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/8c/dd/13/8cdd13bf731e55ec3948027dd64e054c.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/14/17/d5/1417d555211c93c17f8bc4998736eda8.jpg' }}
          style={styles.imagem}
        />
      
        <Button title="Gol" onPress={alerta} color="blue" />     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  nomejogador: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
  },
  imagem: {
    height: 500,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  }
});