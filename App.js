import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: {backgroundColor: 'tomato'}}}>
        <Stack.Screen name='Info' component={Info}/>
        <Stack.Screen name='Home' component={Home} options={{title: 'Home - RN' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Sample React Native Project</Text>
      <Button onPress={()=>{
        navigation.navigate('Info');
      }} title='Go to info'/>
    </View>
  );
}

function Info() {
  return (
    <View style={styles.container}>
      <Text>Info screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efffef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

