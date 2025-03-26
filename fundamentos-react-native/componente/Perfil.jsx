import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Perfil(props){

    return(
        <View style={styles.conatainer}>
            <Text style={{fontSize: 20}}>Perfil</Text>
            <Text style={{fontSize: 20}}>Nome: {props.nome}</Text> 
            <Text style={{fontSize: 20}}>Idade: {props.idade}</Text>
            <Text style={{fontSize: 20}}>Email: {props.email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({  
    conatainer:{
        backgroundColor: 'blue',
        width: 500,
        alignItems: 'center',
    }
});