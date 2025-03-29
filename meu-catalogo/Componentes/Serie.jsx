import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Serie(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {nome}</Text>
      <Text style={styles.info}>Ano: {ano}</Text>
      <Text style={styles.info}>Diretor: {diretor}</Text>
      <Text style={styles.info}>Temporadas: {temporadas}</Text>
      <Image source={{ uri: capa }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 17,
  },
});