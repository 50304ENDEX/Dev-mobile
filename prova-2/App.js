import React from 'react';
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import StackRouterDrawer from './Src/router/StackRouterDrawer';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRouterDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}


