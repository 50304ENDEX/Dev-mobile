import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { List } from 'react-native-paper';

const titulos = [
  { nome: "Campeonato Brasileiro", anos: [1980, 1982, 1987, 1983, 1992, 2009, 2019, 2020] },
  { nome: "Copa Libertadores da América", anos: [1981, 2019, 2022] },
  { nome: "Copa do Brasil", anos: [1990, 2006, 2013, 2022, 2024] },
  { nome: "Supercopa do Brasil", anos: [2020, 2021, 2025] },
];

const TitulosScreen = () => {
  return (
    <View style={{ flex: 1,  backgroundColor: 'black'}}>
      <View style={{ alignItems: 'center', marginVertical: 20,  backgroundColor: 'black' }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>

      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <List.Section>
            <List.Subheader style={{ color: 'red', fontWeight: 'bold' }}>
              {item.nome}
            </List.Subheader>
            <List.Item
              title={`Anos: ${item.anos.join(', ')}`}
              titleStyle={{ color: 'red' }}
            />
          </List.Section>
        )}
      />
    </View>
  );
};

export default TitulosScreen;