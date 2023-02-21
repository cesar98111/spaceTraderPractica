import {View, Text ,StyleSheet, Pressable} from 'react-native'
import { useEffect } from 'react'

import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'

const KEY_STORAGE = "my-key"

const Logout = ({setUserAcount}) =>{
    
    useEffect(()=>{
        setTimeout(()=>{
            setUserAcount(null)
        },2000)
    },[])
    return(
        <View style={Styles.container}>
            <Text>LOGOUT</Text>
           
        </View>
    )
}

const Styles = StyleSheet.create({
   
})

export default Logout