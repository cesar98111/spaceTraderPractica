
import {View, Text, StyleSheet, Pressable, ImageBackground} from 'react-native'



import { useNavigation } from '@react-navigation/native'
const KEY_STORAGE = "my-key"

const Login = () =>{
    const navigate = useNavigation()

    return(

            <>
                <View style={styles.containerLogin}>
                    <ImageBackground source={require("../../assets/login.jpg")} style={{ flex:1 , justifyContent:"center"}}  resizeMode="cover" >
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
                    </ImageBackground>
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
        backgroundColor:"#00252E",
        borderColor:"#00141A",
        borderStyle:"solid",
        borderWidth:3
    },
    registerButton:{
        width:"40%",
        height:"10%",
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
        fontWeight:"bold"
    },
    buttonBox:{
        justifyContent:"space-around",
        alignItems:"center",
        height:"50%",
        width:"100%"
    },
    titleLogin:{
        marginTop:40,
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
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