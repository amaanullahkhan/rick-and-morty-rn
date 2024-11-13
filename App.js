import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Characters from './screens/Characters';
import CharacterDetails from './screens/CharacterDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: '' }}>
        <Stack.Screen name='Characters' component={Characters}/>
        <Stack.Screen name='CharacterDetails' component={CharacterDetails}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

