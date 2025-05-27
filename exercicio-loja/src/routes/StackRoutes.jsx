import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Screen/HomeScreen'
import ListaProdutosScreen from '../Screen/ListaProdutosScreen'
import ProdutoScreen from '../Screen/ProdutoScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='HomeScreen' component={HomeScreen} />

      <Stack.Screen name='ListaScreen' component={ListaProdutosScreen} />

      <Stack.Screen name='ProdutoScreen' component={ProdutoScreen} />

    </Stack.Navigator>
  )
}