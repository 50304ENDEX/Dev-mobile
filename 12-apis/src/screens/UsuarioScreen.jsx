import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UsuarioScreen() {
  return (
    <View style={styles.container}>
      <Text>UsuarioScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})