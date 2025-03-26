import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function SegundoCOmponente(){
    return(
        <Text style ={styles.container}>Segundo Componente</Text>
    )
}


const styles =  StyleSheet.create({
    container: {
        color: 'white'
    },
});