import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Card, Button, Text } from 'react-native-paper'

export default function Controle() {

    const [volume, setVolume] = useState(0)

    function aumentar() {
        if (volume < 10) {
            setVolume(volume + 1)
        }
    }
    function diminuir() {
        if (volume > 0) {
            setVolume(volume - 1)
        }
    }


    return (
        <View>
            <Card>
                <Card.Content>
                    <Card.Title title='Componente Controle' />
                    <Text variant='displayMedium'>Volume: {volume}</Text>
                </Card.Content>


                <Card.Actions>

                    <Button
                        mode='contained-tonal'
                        icon='minus'
                        onPress={diminuir}>
                        Diminuir
                    </Button>



                    <Button
                        mode='contained'
                        icon ='plus'
                        onPress={aumentar}>
                        Aumentar
                    </Button>
                </Card.Actions>
            </Card>

        </View>
    )
}