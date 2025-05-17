import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const novoJogo = Array.from(numeros).sort((a, b) => a - b);
    setJogoGerado(novoJogo);
    setJogosMegaSena([...jogosMegaSena, novoJogo]);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo da Mega-Sena
      </Button>

      <Text style={styles.titulo}>Jogo Atual:</Text>
      <Text>{jogoGerado.join(' - ')}</Text>

      <Text style={styles.titulo}>Histórico:</Text>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{index + 1}: {item.join(' - ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default MegaSenaScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 70, backgroundColor: '#f5f5f5' },
  titulo: { marginTop: 20, fontWeight: 'bold', fontSize: 18 },
  card: { marginVertical: 5 }
});
