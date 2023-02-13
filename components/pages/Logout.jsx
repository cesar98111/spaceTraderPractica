import {View, Text} from 'react-native'
import { useEffect } from 'react'

import * as SecureStore from 'expo-secure-store'



const KEY_STORAGE = "my-key"
const Logout = ({setUserAcount}) =>{

    useEffect(()=>{
        const deleteStorage = async() =>{
            try{
                await SecureStore.deleteItemAsync(KEY_STORAGE) 
                setUserAcount(null)   
            }catch(err){
                console.log(err)
            }
        }
    setTimeout(()=>{
        deleteStorage()
    },2000)
        
    },[])
    
    return(
        <View>
            <Text>
                LOGOUT
            </Text>
        </View>
    )
}

export default Logout