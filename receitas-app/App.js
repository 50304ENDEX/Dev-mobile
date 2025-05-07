import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Receitas' }}
        />
        <Stack.Screen
          name="Receita"
          component={ReceitaScreen}
          options={({ route }) => ({ title: route.params.receita.nome })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
