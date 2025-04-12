import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import titulo from './screen/titulo';
import time from './screen/time';
import jogador from'./screen/jogador'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
            name='Jogador'
            component={jogador}
            options={{
              title: "Jogadores",
              tabBarIcon: ({ color, size }) => {
                <Ionicons name='add' color={color} size={size} />
              }
            }}
          />

          <Tab.Screen
            name='Time'
            component={time}
            options={{
              title: "Time",
              tabBarIcon: ({ color, size }) => {
                <Ionicons name='alert' color={color} size={size} />
              }
            }}
          />

          <Tab.Screen
            name='Titulo'
            component={titulo}
            options={{
              title: "Titulo",
              tabBarIcon: ({ color, size }) => {
                <Ionicons name='arrow-back' color={color} size={size} />
              }
            }}
          />



        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


