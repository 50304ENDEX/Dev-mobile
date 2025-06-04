import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../Screens/HomeScreen'
import Filmes from '../Screens/Filmes'

const Drawer = createDrawerNavigator()

export default function StackRouterDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Lista de Tarefas"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name='pessoal'
                component={Filmes}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}
            />

        </Drawer.Navigator>
    )
}