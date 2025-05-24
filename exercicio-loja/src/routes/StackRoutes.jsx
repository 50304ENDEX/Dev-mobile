import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Screen/HomeScreen'
import ListaProdutosScreen from '../Screen/ListaProdutosScreen'
import ProdutoScreen from '../Screen/ProdutoScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='ListaScreen'
        component={ListaProdutosScreen}
        options={{
          title: "Lista de Produtos",
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='ProdutoScreen'
        component={ProdutoScreen}
        options={{
          title: "Produto",
          headerTitleAlign: 'center'
        }}
      />

    </Stack.Navigator>
  )
}