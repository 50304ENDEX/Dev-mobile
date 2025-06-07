import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../Screens/HomeScreen'
import MenuScreen from '../Screens/MenuScreen'
import OrdersScreen from '../Screens/OrdersScreen'
import ProfileScreen from '../Screens/ProfileScreen'

const Drawer = createDrawerNavigator()

export default function StackRouterDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Início"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Cardápio"
                component={MenuScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="restaurant" size={24} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Pedidos"
                component={OrdersScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="receipt" size={24} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person" size={24} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
