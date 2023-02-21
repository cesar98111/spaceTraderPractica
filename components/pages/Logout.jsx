import {View, Text ,StyleSheet, Pressable} from 'react-native'
import { useEffect } from 'react'

import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'

const KEY_STORAGE = "my-key"

const Logout = ({setUserAcount}) =>{
    
    const navigate = useNavigation()

    const handlerExit = async()=>{
        try{
            await SecureStore.deleteItemAsync(KEY_STORAGE)
            setUserAcount(null)

        }catch(err){
            console.log(err)
        }
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.containerLogout}>
                <Text style={Styles.titleText}>¿ESTAS SEGURO QUE QUIERE SALIR?</Text>
                <View style={Styles.containerButton}>
                    <Pressable onPress={() => handlerExit()} style={Styles.buttonExit}>
                        <Text style={Styles.textButton}>
                            exit
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => navigate.goBack() } style={Styles.buttonCancel}>
                        <Text style={Styles.textButton}>
                            cancel
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    containerLogout:{
        height:"50%",
        width:"80%",
        backgroundColor:"#CCCCCC",
        justifyContent:"center",
        alignItems:"center",
        
    },
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    containerButton:{
        margin:20,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    buttonCancel:{
        width:"40%",
        height:40,
        backgroundColor:"#FF1C01",
        borderColor:"#663600",
        borderStyle:"solid",
        borderWidth:3
    },
    buttonExit:{
        width:"40%",
        height:40,
        backgroundColor:"#AB6100",
        borderColor:"#663600",
        borderStyle:"solid",
        borderWidth:3
    },
    textButton:{
        height:"100%",
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:20
    },
    titleText:{
        fontSize:20,
        textAlign:"center"
    }
    
})

export default Logout