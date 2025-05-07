import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, List, Button } from 'react-native-paper';

const ReceitaScreen = ({ route, navigation }) => {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Title>{receita.nome}</Title>
          <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
          <Paragraph>Porções: {receita.porcoes}</Paragraph>

          <List.Section title="Ingredientes">
            {receita.ingredientes.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Section>

          <List.Section title="Modo de Preparo">
            {receita.modoPreparo.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Section>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        Voltar
      </Button>
    </ScrollView>
  );
};

export default ReceitaScreen;
