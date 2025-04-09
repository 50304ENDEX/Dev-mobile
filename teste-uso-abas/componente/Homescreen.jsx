import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

export default function Homescreen() {
    return (
        <View style={styles.container}>

            <Text variant='headLineLarge' style={{ textAlign: 'center' }} >Homescreen</Text>

            <Card>

                <Card.Content>

                    <Title> Um titulo</Title>

                    <Paragraph>
                        Um cidadão fez voto de desapego e pobreza.
                        Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas,
                        e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um.
                        Levava apenas uma tanga no corpo.
                    </Paragraph>


                </Card.Content>

            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        flex: 1,
        alignItems: "center",
        paddingTop: 10
    }
})