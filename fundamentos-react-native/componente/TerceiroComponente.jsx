import React from "react";
import {Text, StyleSheet, View} from 'react-native';

export default function TerceiroComponente(){
    return(
        <View>
            <Text style ={styles.container}>Terceiro Componente</Text>
        </View>
    )
}


const styles = StyleSheet.create({  
    container: { 
        color: 'black',
        fontSize: 20,
        backgroundColor: 'yellow', 
}}
);