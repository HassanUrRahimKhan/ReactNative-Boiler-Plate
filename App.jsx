import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PreLogin from './src/Screens/PreLogin'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/Screens/Signin';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home';
import CreateTeam from './src/Screens/CreateTeam';
import CreateTask from './src/Screens/CreateTask';
import Projects from './src/Screens/Projects';
import Intro1 from './src/Screens/Intro1';
import Intro2 from './src/Screens/Intro2';
import Intro3 from './src/Screens/Intro3';
import EditProfile from './src/Screens/EditProfile';
import Language from './src/Screens/Language';
import Settings from './src/Screens/Settings';
import Profile from './src/Screens/Profile';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="preLoginScreen">
        <Stack.Screen name="preLoginScreen" component={PreLogin}options={{ headerShown: false }} />
        <Stack.Screen name="signinScreen" component={Signin}options={{ headerShown: false }} />
        <Stack.Screen name="signUpScreen" component={SignUp}options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={Home}options={{ headerShown: false }} />
        <Stack.Screen name="CreateteamScreen" component={CreateTeam}options={{ headerShown: false }} />
        <Stack.Screen name="CreateTaskScreen" component={CreateTask}options={{ headerShown: false }} />
        <Stack.Screen name="ProjectsScreen" component={Projects}options={{ headerShown: false }} />
        <Stack.Screen name="Intro1Screen" component={Intro1}options={{ headerShown: false }} />
        <Stack.Screen name="Intro2Screen" component={Intro2}options={{ headerShown: false }} />
        <Stack.Screen name="Intro3Screen" component={Intro3}options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile}options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={Language}options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings}options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile}options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})