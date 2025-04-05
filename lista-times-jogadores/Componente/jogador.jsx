import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Avatar } from 'react-native-paper'

export default function jogador(props) {

    const {nome, numero, imagem} = props

  return (

    <Card.Title
      title={nome} 
      subtitle={numero}
      left={(props) => <Avatar.Image {...props} source={{uri: imagem}} />}
    />

  )
}

const styles = StyleSheet.create({})