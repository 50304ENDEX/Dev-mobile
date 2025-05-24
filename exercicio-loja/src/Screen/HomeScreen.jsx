import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton, Text, ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  // Fazer algo quando o componente for montado
  useEffect(() => {
    // Requisição para buscar as categorias
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        console.log(response.data);
        setCategories(response.data); // Atualiza o estado com as categorias
      })
      .catch((error) => {
        console.log('Erro ao buscar categorias:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: 45 }}
        data={categories}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 8 }}
            onPress={() => navigation.navigate('ListaScreen', { category: item })}
          >
            <Card.Title
              title={item}
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={() => <IconButton icon="chevron-right" size={30} />}
            />
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={100} />
            <Text variant="titleLarge">Carregando...</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loadingContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'center',
  },
});