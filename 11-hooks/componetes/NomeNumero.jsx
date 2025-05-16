import { StyleSheet,  View } from 'react-native'
import React, {useState} from 'react'
import { Button, Card, Text } from 'react-native-paper'


export default function NomeNumero() {
    
    const [nome, setNome] = useState('??????')
    const [numero, setNumero] = useState('??????')
    
    

    function mostrarNomeNumero() {
        setNome('Lucas')
        setNumero('123')

        console.log(nome)
        console.log(numero)
    }

    function alterarNome(){
        setNome('Arthur')
        setNumero('456')
        console.log(numero)
        console.log(nome)
    }

  return (
    <View>
      <Card>
            <Card.Content>
                <Card.Title title="Componente NomeNumero" />
                <Text>Nome: {nome}</Text>
                <Text></Text>
                <Text>Numero: {numero}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={mostrarNomeNumero}>Mostrar</Button>   
                <Button onPress={alterarNome}>Alterar nome</Button>
            </Card.Actions>
      </Card>
    </View>
  )
}

