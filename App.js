import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {RootSiblingParent} from  'react-native-root-siblings'

import * as SecureStore from 'expo-secure-store'

import Home from './components/pages/Home';
import Login from './components/pages/Login';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
   <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name="home" component={Home}/>
          <Drawer.Screen name="login" component={Login}/>
        </Drawer.Navigator>
      </NavigationContainer>
   </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
