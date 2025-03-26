import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function JavascriptComponente() {

    const nome = "Fulano";
    const idade = 50;

    function checkMaiorIdade(){
        if(idade >= 18){
            return "Maior de idade";
        }
        else{
            return "Menor de idade";
        }
    }

    function alerta(){
        alert("Clicou")
    }


    return(
        <View style={styles.constainer}>
            <Text>Javascript Componente</Text>

            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Idade + 40: {idade + 40}</Text>
            <Text>É maior de idade? {checkMaiorIdade()}</Text>
            <Text>Check: {idade >= 18 ? "18+" : "18-"}</Text>
            <Button title="Clique aqui" onPress={alerta}/>

        </View>
    )
}

const styles = StyleSheet.create({
    constainer :{
        backgroundColor: "white",
        borderRadius: 10,  
    }
})
