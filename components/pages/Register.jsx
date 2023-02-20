import { useState } from "react"
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native"
import ModalError from "../modal/ModalError"
import { useNavigation } from "@react-navigation/native"


const Register = ({createUserAcount}) =>{

    const navigate = useNavigation()

    const [error, setError] = useState(false)
    const [name , setName] = useState('')
    


    const handlerNameChange = (data) =>{
        setName(data)
    }
 
    const handlerRegister = async() =>{
        
        if(name !== ''){
           
            setError(await createUserAcount(name))
            setName('')
            
        }else{
            console.log("Entra en error")
            setError(true)
        }    
    }


    return(
        <View style={Styles.containerLogin}>
                <ModalError error={error} setError={setError}/>
                <Text style={Styles.titleLogin}>PLEASE, INTRODUCE YOUR USERNAME</Text>
                <View style={Styles.buttonBox}>
                    <TextInput style={Styles.inputLogin}
                    placeholder="introduce userName"
                    onChangeText={handlerNameChange}
                    value={name}/>
                    <View style={Styles.buttonContainer}>
                        <Pressable style={Styles.registerButton} onPress={handlerRegister}>
                            <Text style={Styles.textButton}>
                                Registrer
                            </Text>
                        </Pressable>
                        <Pressable onPress={()=> navigate.goBack()} style={Styles.cancelButton}>
                            <Text style={Styles.textButton}>Cancel</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
    )
}

const Styles = StyleSheet.create({
    textButton:{
        height:"100%",
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        fontWeight:"bold"
    },
    registerButton:{
        width:"40%",
        height:"10%",
        backgroundColor:"#FCC02D"
    },
    buttonBox:{
        justifyContent:"center",
        alignItems:"center",
        height:"50%",
        width:"100%"
    },
    buttonContainer:{
        height:"100%",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        
    },
    titleLogin:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    inputLogin:{
        borderStyle:"solid",
        borderWidth:1,
        height:40,
        width:200,
        marginBottom:40
    },
    containerLogin:{
        width:"100%",
        height:"100%",
        justifyContent:"space-around",
        alignItems:"center"
    },
    cancelButton:{
        width:"40%",
        height:"10%",
        backgroundColor:"#FF1C01"
    },
})

export default Register