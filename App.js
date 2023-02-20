import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';

import {RootSiblingParent} from  'react-native-root-siblings'

import * as SecureStore from 'expo-secure-store'
import {createUser, requestUserAcount} from './services/spaceTraderServices';


import { useEffect, useState } from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Loans from './components/pages/Loans';
import Ships from './components/pages/Ships';
import Register from './components/pages/Register';
import SignUp from './components/pages/SignUp';


const Drawer = createDrawerNavigator()
const KEY_STORAGE = "my-key"

export default function App() {
  
  const [userAcount , setUserAcount] = useState()
  const [userToken , setUserToken] = useState()
  

  useEffect(()=>{
    const renderGetUserAcount = async() =>{
      try{
      
        const data = await SecureStore.getItemAsync(KEY_STORAGE)
        console.log(data)
        
        if(data){
          setUserToken(data)
          
          console.log(data)
          setUserAcount(await requestUserAcount(data))
          
          
        }
        
        
        
      }catch(err){
        console.error(err)
      }
      
    }

    renderGetUserAcount()
    
  },[])
  

  const createUserAcount = async (userName) =>{
  
    try{
                
      const data = await createUser(userName)
      
      if(data.token !== undefined){
        console.log("hola")
        await SecureStore.setItemAsync(KEY_STORAGE, data.token)
         
        const user = await requestUserAcount(data.token)
        console.log(user)
        setUserToken(data.token)
        setUserAcount(user)
        return false
      }else{
        
        return true
        
      }      
  }catch(err){
    console.log("salgo")
    return true
  }

  }


  const getUserAcount = async (token) =>{
    
      try{
          const user = await requestUserAcount(token)
          
          if(user.error === undefined){
            await SecureStore.setItemAsync(KEY_STORAGE,token)
            setUserAcount(user)
            return false
          }else{
            
            return true
          }
          
          
      }catch(err){
        
         return true
      }

  }

  
  return (
   <RootSiblingParent>
      <NavigationContainer documentTitle={false}>
        <Drawer.Navigator initialRouteName='Home' >
          {
            (userAcount === undefined)||(userAcount === null)?
            <>
              <Drawer.Screen  name="Login">
                {()=><Login  createUserAcount={createUserAcount}  />}
              </Drawer.Screen>
              <Drawer.Screen name="SignUp" >
                {() => <SignUp getUserAcount={getUserAcount}/>}
              </Drawer.Screen>
              <Drawer.Screen name="Register">
                {() => <Register createUserAcount={createUserAcount}/>}
              </Drawer.Screen>
            </>
            :
            <>
              <Drawer.Screen name="Home">
                {()=><Home userAcount={userAcount} userToken={userToken}/>}
              </Drawer.Screen> 
              <Drawer.Screen name="Loans"  component={Loans}/>
              <Drawer.Screen name="Ships">
                {() => <Ships userToken={userToken}/>}
              </Drawer.Screen>
              
              <Drawer.Screen name="Logout">
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
