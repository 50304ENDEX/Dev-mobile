import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Escudo':
              iconName = 'shield-outline';
              break;
            case 'Jogadores':
              iconName = 'people-outline';
              break;
            case 'Títulos':
              iconName = 'trophy-outline';
              break;
            default:
              iconName = 'help-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Escudo" component={EscudoScreen} />
      <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
      <Drawer.Screen name="Títulos" component={TitulosScreen} />
    </Drawer.Navigator>
  );
}
