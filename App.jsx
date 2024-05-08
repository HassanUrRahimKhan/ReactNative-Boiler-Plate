import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PreLogin from './src/Screens/PreLogin'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/Screens/Signin';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="preLoginScreen">
        <Stack.Screen name="preLoginScreen" component={PreLogin}options={{ headerShown: false }} />
        <Stack.Screen name="signinScreen" component={Signin}options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})