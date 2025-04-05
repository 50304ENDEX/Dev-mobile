import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';
import { FlatList } from 'react-native';

export default function Time(props) {
  const { nome, anoFundacao, imagem, mascote, jogadores} = props;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={"nome: "+ nome} subtitle={"Mascote: "+ mascote}/>
        <Card.Content>
            <Text>{"ano de fundação: "+ anoFundacao}</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: imagem }}
          style={styles.cardCover}
        />

      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
            <jogadores
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
        />
      </Card.Actions>
      

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1, // Permite que o container ocupe toda a altura disponível
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    paddingTop: 10,
    borderRadius:10
  },
  card: {
    width: 350, // Largura do card ajustada
    margin: 10,
    borderRadius: 10, // Arredondando os cantos do Card
  },
  cardCover: {
    width: '100%', // A imagem agora vai ocupar toda a largura do Card
    height: 400, // A altura da imagem é ajustada para 200, mas pode ser alterada conforme necessário
    resizeMode: 'cover', // Garante que a imagem se ajuste sem distorcer, recortando o excesso
    borderTopLeftRadius: 10, // Arredonda os cantos superiores da imagem para combinar com o Card
    borderTopRightRadius: 10,
  },
});

