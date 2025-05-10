import React from 'react';
import { FlatList, View } from 'react-native';
import { List, Title, Paragraph } from 'react-native-paper';

const titulos = [
  {
    nome: 'Campeonato Brasileiro',
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
  },
  {
    nome: 'Copa Libertadores da América',
    anos: [1981, 2019, 2022],
  },
  {
    nome: 'Copa do Brasil',
    anos: [1990, 2006, 2013, 2022, 2024],
  },
  {
    nome: 'Supercopa do Brasil',
    anos: [2020, 2021, 2025],
  },
];

export default function TitulosScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Title>Títulos Conquistados</Title>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <List.Section>
            <List.Subheader>{item.nome}</List.Subheader>
            <Paragraph style={{ marginLeft: 16 }}>{item.anos.join(', ')}</Paragraph>
          </List.Section>
        )}
      />
    </View>
  );
}
