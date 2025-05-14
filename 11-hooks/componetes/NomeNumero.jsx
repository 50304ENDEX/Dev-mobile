import { StyleSheet,  View } from 'react-native'
import React, {useState} from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function NomeNumero() {
    
    const [nome, setNome] = useState('??????')
    const [numero, setNumero] = useState('??????')
    
    

    function mostrarNomeNumero() {
        setNome('Lucas')
        setNumero('123')

        console.log(nome)
        console.log(numero)
    }

    function alertNome(){
        alert(nome)
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
                <Button onPress={alertNome}>Alert</Button>
            </Card.Actions>
      </Card>
    </View>
  )
}

