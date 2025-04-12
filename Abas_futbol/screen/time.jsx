import { View, Image } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper';

export default function time() {

    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', paddingTop: 30, backgroundColor:'black'}}>
            <Image 
            source={{uri: time.escudo}} 
            style={{height: 400, width: 400, borderRadius: 60, marginBottom: '20'}}
            />

            <Title style={{alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight:'bold', fontFamily: 'large' }}>{time.nome}</Title>
        </View>
    )
}

