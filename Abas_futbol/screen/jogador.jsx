import {  Text, View, Image, FlatList } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import React from 'react'

export default function jogador() {

  const jogadores = [
    {
    nome: "Gabriel Barbosa",
    numero: 9,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
    },
    {
    nome: "Arrascaeta",
    numero: 14,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
    },
    {
    nome: "Everton Ribeiro",
    numero: 7,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
    },
    {
    nome: "David Luiz",
    numero: 23,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
    },
    {
    nome: "Pedro",
    numero: 21,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
    },
    ];


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{ alignItems: 'center', marginVertical: 20, backgroundColor: 'black'}}>
            <Image
              source={{uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg'}}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
        </View>


        <FlatList
          data={jogadores}
          keyExtractor={(item) => {item.numero.toString()}}
          renderItem={({item}) =>(
          <Card style={{backgroundColor: 'black', margin: 10}}>
            <Card.Cover source={{uri: item.imagem}}/>
            <Card.Content>
              <Title style={{color: 'white', fontWeight: 'bold'}}>{item.nome}</Title>
              <Paragraph style={{color:'white'}}>Numero: {item.numero}</Paragraph>
            </Card.Content>
          </Card>
          )}
        />
    </View>
  )
}