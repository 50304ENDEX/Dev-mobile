import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './componente/Homescreen';
import SettingSreen from './componente/SettingSreen';
import ProfileScren from './componente/ProfileScren';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>

          {/*Homescreen*/}
          <Tab.Screen
            name='Homescreen'
            component={Homescreen}
          />



          {/*SettingSreen*/}
          <Tab.Screen
            name='SettingSreen'
            component={SettingSreen}
          />


          {/*ProfileScren*/}
          <Tab.Screen
            name='ProfileScren'
            component={ProfileScren}
          />

        </Tab.Navigator>

      </NavigationContainer>

    </PaperProvider>
  );
}

