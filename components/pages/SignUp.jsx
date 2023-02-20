
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { View, Text, StyleSheet, Pressable, TextInput} from "react-native"



const SignUp= ({getUserAcount}) => {

    const [token , setToken] = useState('')
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const handlerChangeText = (data) =>{
        setToken(data)
    }

    const handlerLogin = async () =>{
        console.log("hola")
        if(token!==''){
            
            setError(await getUserAcount(token))
        if(error){
                setColor("red")

                setTimeout(()=>{
                    setColor("black")
                
                },1000)
            }
            setToken('')
        }else{
            setColor("red")

            setTimeout(()=>{
                setColor("black")
            
            },1000)
        }
        setToken('')
    }
            
        
        
        
    

    const navigate = useNavigation()
    return(
        <View style ={Styles.containerToken}>
            <Text style={Styles.titleLogin}>
                introduce your Token
            </Text>
            <TextInput
                placeholder="token"
                style={{...Styles.loginInput, borderColor:color}}
                value={token}
                onChangeText={handlerChangeText}
                />
            <View style={Styles.containerButton}>
                <Pressable style={Styles.buttonLogin} onPress={handlerLogin}>
                    <Text style={Styles.buttonText} >
                        Login
                    </Text>
                </Pressable>

                <Pressable style={Styles.buttonCancel} onPress={() => navigate.goBack()}>
                    <Text style={Styles.buttonText}>
                        Cancel
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}




const Styles  = StyleSheet.create(
    {   

        containerToken:{
            flexDirection:"column",
            height:"100%",
            width:"100%",
            justifyContent:"space-evenly",
            alignItems:"center"
        },
        containerButton:{
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"stretch",
            width:"100%"
        },
        buttonText:{
            color: "white",
            height:"100%",
            width:"100%",
            textAlignVertical:"center",
            textAlign:"center",
            fontWeight:"bold",
            fontSize:20
        },
        titleLogin:{
            fontSize:30,
            fontWeight:"bold"
        },  
        buttonLogin:{
            height:40,
            width:"30%",
            backgroundColor:"#6AA0EE"
        },
        buttonCancel:{
            height:40,
            width:"30%",
            backgroundColor:"#FF1C01"
        },
        loginInput:{
            height:40,
            width:"70%",
            borderStyle:"solid",
            borderWidth:1,
            textAlign:"center",
            fontSize:20
        }



    }
)

export default SignUp