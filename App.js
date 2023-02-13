import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {RootSiblingParent} from  'react-native-root-siblings'

import * as SecureStore from 'expo-secure-store'

import { useState } from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login';

const Drawer = createDrawerNavigator()

const KEY_STORAGE = "my-key"

export default function App() {

  const [userAcoutn , setUserAcoutn] = useState()

  const sendUserName = async(key, value)=>{

  }

  const send =(userName)=>{
    sendUserName(KEY_STORAGE,userName)
  }
  
  return (
   <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          {
            (userAcoutn === null || userAcoutn === undefined)?
            <>
              <Drawer.Screen name="Home">
                <Home/>
              </Drawer.Screen>
            </>
            
            :
            <>
              <Drawer.Screen name="login">
                <Login sendUser={send}/>
              </Drawer.Screen>
            </>
          }
        
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
