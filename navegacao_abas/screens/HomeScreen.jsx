import { StyleSheet,  View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (

    <View style={styles.conatiner}>

        <Text variant='headlineLarge' style={{ textAlign: "center" }}>Tela de Inicio</Text>

        <Card style={{ width: "98%"}}>
            <Card.Content>
                <Title>Um titulo</Title>
                <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
        </Card>

        <Card style={{ width: "98%"}}>
            <Card.Content>
                <Title>Um titulo</Title>
                <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
        </Card>
        
    </View>

  )
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    }
});