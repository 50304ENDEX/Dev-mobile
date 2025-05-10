import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawRoute from './src/routes/DrawRoute';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        < DrawRoute />
      </NavigationContainer>
    </PaperProvider>
  );
}
