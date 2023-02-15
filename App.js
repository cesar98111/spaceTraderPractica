import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {RootSiblingParent} from  'react-native-root-siblings'

import * as SecureStore from 'expo-secure-store'
import {createUser, requestUserAcount} from './services/spaceTraderServices';


import { useEffect, useState } from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Loans from './components/pages/Loans';
import Ships from './components/pages/Ships';

const Drawer = createDrawerNavigator()

const KEY_STORAGE = "my-key"

export default function App() {

  const [userAcount , setUserAcount] = useState(undefined)
  const [userToken , setUserToken] = useState(undefined)
  

  useEffect(()=>{
    const renderGetUserAcount = async() =>{
      try{
        const data = await SecureStore.getItemAsync(KEY_STORAGE)
        setUserToken(data)
        if(data){
          console.log(data)
          setUserAcount(await requestUserAcount(data))
          console.log(userAcount)
        }
        
        
      }catch(err){
        console.error(err)
      }
      
    }

    renderGetUserAcount()
    
  },[])

  
  return (
   <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          {
            (userAcount === undefined)||(userAcount === null)?
            <>
              <Drawer.Screen name="Login">
                {()=><Login  setUserAcount={setUserAcount} setUserToken={setUserToken}  />}
              </Drawer.Screen>
            </>
            :
            <>
              
              <Drawer.Screen name="Home">
                {()=><Home userAcount={userAcount} userToken={userToken}/>}
              </Drawer.Screen> 
              <Drawer.Screen name="Loans" component={Loans}/>
              <Drawer.Screen name="Ships" component={Ships}/>
              <Drawer.Screen name='Logout'>
                {()=><Logout setUserAcount={setUserAcount}/>}
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
