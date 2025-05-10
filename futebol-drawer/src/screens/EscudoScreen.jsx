import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Title, Paragraph, Chip } from 'react-native-paper';

const time = {
  nome: 'Flamengo',
  escudo: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg',
  fundacao: '15 de novembro de 1895',
  estadio: 'Maracanã',
  mascote: 'Urubu',
  cores: ['Vermelho', 'Preto'],
};

export default function EscudoScreen() {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
      <Title>{time.nome}</Title>
      <Image source={{ uri: time.escudo }} style={{ width: 200, height: 200, marginVertical: 20 }} />
      <Paragraph><strong>Fundação:</strong> {time.fundacao}</Paragraph>
      <Paragraph><strong>Estádio:</strong> {time.estadio}</Paragraph>
      <Paragraph><strong>Mascote:</strong> {time.mascote}</Paragraph>
      <Paragraph style={{ marginTop: 10 }}><strong>Cores:</strong></Paragraph>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        {time.cores.map(cor => (
          <Chip key={cor} style={{ margin: 4 }}>{cor}</Chip>
        ))}
      </View>
    </ScrollView>
  );
}
