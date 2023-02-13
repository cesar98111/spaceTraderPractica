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

const Drawer = createDrawerNavigator()

const KEY_STORAGE = "my-key"

export default function App() {

  const [userAcount , setUserAcount] = useState(undefined)
  const [userToken, setUserToken] = useState()
  
  useEffect(()=>{
    const renderGetUserAcount = async() =>{
      try{
        const data = await SecureStore.getItemAsync(KEY_STORAGE)
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
  const sendUserName = async(key, value)=>{
      try{
      
          const data = await createUser(value)
          console.log(data)
        
          const token = data.token
          console.log(data)
          await SecureStore.setItemAsync(key, token)
          console.log(token)
          setUserAcount(await requestUserAcount(token))
          console.log(userAcount)
        

      }catch(err){
        console.error("papa")
      }
  }

  const send =(userName)=>{
    console.log(userName)
    sendUserName(KEY_STORAGE,userName)
  }
  const sendToken =(token) =>{
    const sendUserToken = async () =>{
      try{
        const user = await requestUserAcount(token)
        console.log(user)
        if(user !== undefined){
          await SecureStore.setItemAsync(KEY_STORAGE,token)
          setUserAcount(user)
        }
      }catch(err){
        console.log(err)
      }
    }

    sendUserToken()
  }
  
  return (
   <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          {
            (userAcount === undefined)||(userAcount === null)?
            <>
              <Drawer.Screen name="Login">
                {()=><Login sendUser={send} sendToken={sendToken}/>}
              </Drawer.Screen>
            </>
            :
            <>
              
              <Drawer.Screen name="Home">
                {()=><Home userAcount={userAcount}/>}
              </Drawer.Screen> 
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
