
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native'



import { useNavigation } from '@react-navigation/native'
const KEY_STORAGE = "my-key"

const Login = () =>{
    const navigate = useNavigation()

    return(

            <>
                <View style={styles.containerLogin}>
                    <Text style={styles.titleLogin}>BIENVENIDO A SPACETRADER</Text>
                    <View style={styles.buttonBox}>
                        <Pressable style={styles.loginButton} onPress={()=> navigate.navigate("SignUp")}>
                            <Text style={styles.textButton}>Login</Text>
                        </Pressable>
                        <Pressable style={styles.registerButton} onPress={() => navigate.navigate("Register")}>
                            <Text style={styles.textButton}>
                                Register
                            </Text>
                        </Pressable>
                    </View>
                </View>

        </>
        
    )
}

const styles = StyleSheet.create({
    containerLogin:{
        width:"100%",
        height:"100%",
        justifyContent:"space-around",
        alignItems:"center"
    },
    loginButton:{
        width:"40%",
        height:"10%",
        backgroundColor:"#6AA0EE"
    },
    registerButton:{
        width:"40%",
        height:"10%",
        backgroundColor:"#FCC02D"
    },
    textButton:{
        height:"100%",
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        fontWeight:"bold"
    },
    buttonBox:{
        justifyContent:"center",
        alignItems:"center",
        height:"50%",
        width:"100%"
    },
    titleLogin:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    cancelButton:{
        width:"40%",
        height:"10%",
        backgroundColor:"#FF1C01"
    },
    inputLogin:{
        borderStyle:"solid",
        borderWidth:1,
        height:40,
        width:200,
        marginBottom:40
    }

})
export default Login