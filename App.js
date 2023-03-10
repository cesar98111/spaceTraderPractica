import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';

import {RootSiblingParent} from  'react-native-root-siblings'

import * as SecureStore from 'expo-secure-store'
import {createUser, requestUserAcount, takeAvaliableLoans, requestBuyShip} from './services/spaceTraderServices';


import { useEffect, useState } from 'react';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Loans from './components/pages/Loans';
import Ships from './components/pages/Ships';
import Register from './components/pages/Register';
import SignUp from './components/pages/SignUp';
import Menu from './components/menu/Menu';


const Drawer = createDrawerNavigator()
const KEY_STORAGE = "my-key"
const KEY_PHOTO_STORAGE = "my-photo"

export default function App() {
  
  const [userAcount , setUserAcount] = useState()
  const [userToken , setUserToken] = useState()
  const [avatar, setAvatar] = useState({
    foto1:"foto1",
    foto2:"foto2",
    foto3:"foto3"
  })
  const[userAvatar, setUserAvatar] = useState()
  useEffect(()=>{
    const renderGetUserAcount = async() =>{
      try{
        
        setUserAvatar(avatar[await SecureStore.getItemAsync(KEY_PHOTO_STORAGE)])
        
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
      const listKeysAvatar = Object.keys(avatar)  

      const data = await createUser(userName)
      
      if(data.token !== undefined){
        const keyAvatar = listKeysAvatar[Math.floor(Math.random()*3)]
        console.log(keyAvatar)
        await SecureStore.setItemAsync(KEY_STORAGE, data.token)
        await SecureStore.setItemAsync(KEY_PHOTO_STORAGE, keyAvatar) 
        const user = await requestUserAcount(data.token)
        console.log("asdads")

        setUserAvatar(keyAvatar)
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
          const listKeysAvatar = Object.keys(avatar) 
          if(user.error === undefined){
            const keyAvatar = listKeysAvatar[Math.floor(Math.random()*3)]
            await SecureStore.setItemAsync(KEY_PHOTO_STORAGE, keyAvatar) 
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

  const buyShips = async (location,type)=>{
    console.log(location, type)
    await requestBuyShip(userToken, type, location)
    setUserAcount( await requestUserAcount(userToken))
  }

  const takeLoans = async(loans) =>{
      
      try{
          
          await takeAvaliableLoans(userToken, loans)
          setUserAcount( await requestUserAcount(userToken))
          
      }catch(err){
          console.log(err)
      }
    
  }

  const renderImage = () =>{
    
    switch(userAvatar){
        case "foto1":
            return require("./assets/astronauta.png")
        case "foto2":
            return require("./assets/foto2.jpg")
        case "foto3":
            return require("./assets/foto3.jpg")
    }
  }
  return (
   <RootSiblingParent>
      <NavigationContainer documentTitle={false}>
        <Drawer.Navigator initialRouteName='Home' drawerContent={(prop) => <Menu {...prop} userAcount={userAcount} renderImage={renderImage}/>} >
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
                {()=><Home userAcount={userAcount} userToken={userToken} renderImage={renderImage}/>}
              </Drawer.Screen> 
              <Drawer.Screen name="Loans">
                {() => <Loans userToken={userToken} takeLoans={takeLoans}/>}
              </Drawer.Screen>
              <Drawer.Screen name="Ships">
                {() => <Ships userToken={userToken} buyShip={buyShips}/>}
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
