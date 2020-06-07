import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './screen/Home';
import Abas from './routes/Abas';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Camera from './screen/Camera';
import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Abas'
          component={Abas}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='Camera'
          component={Camera}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='ProfileToEdit'
          component={ProfileToEdit}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='ChooseIcon'
          component={ChooseIcon}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}