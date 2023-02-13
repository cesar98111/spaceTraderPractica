
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import {useState} from 'react'




const Login = ({sendUser, sendToken}) =>{

    const [value, setValue] = useState('')
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)

    const handlerValue = (data) =>{
        setValue(data)
        console.log(data)
    }

    const sendRegister = () =>{
        sendUser(value)
        setRegister(false)
        setValue('')
    }
    
    const sendLogin = () =>{
        sendToken(value)
        setLogin(false)
        setValue('')
    }
    return(

            <>
            {
            login === false
            ?
            null
            :
            <View style={styles.containerLogin}>
                <Text style={styles.titleLogin}>PLEASE, INTRODUCE YOUR TOKEN</Text>
                <View style={styles.buttonBox}>
                    <TextInput style={styles.inputLogin}
                    placeholder="add token"
                    onChangeText={handlerValue}
                    value={value}
                    />
                    <Pressable style={styles.loginButton} onPress={() => sendLogin()}>
                        <Text style={styles.textButton}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
            }
            {
            register === false
            ?
            null
            :
            <View style={styles.containerLogin}>
                <Text style={styles.titleLogin}>PLEASE, INTRODUCE YOUR USERNAME</Text>
                <View style={styles.buttonBox}>
                    <TextInput style={styles.inputLogin}
                    placeholder="introduce userName"
                    onChangeText={handlerValue}
                    value={value}/>
                    <Pressable style={styles.registerButton} onPress={()=>sendRegister()}>
                        <Text style={styles.textButton}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </View>
            }
            {
                login || register 
                ? null
                : 
                <View style={styles.containerLogin}>
                    <Text style={styles.titleLogin}>BIENVENIDO A SPACETRADER</Text>
                    <View style={styles.buttonBox}>
                        <Pressable style={styles.loginButton} onPress={()=> setLogin(true)}>
                            <Text style={styles.textButton}>Login</Text>
                        </Pressable>
                        <Pressable style={styles.registerButton} onPress={() => setRegister(true)}>
                            <Text style={styles.textButton}>
                                Register
                            </Text>
                        </Pressable>
                    </View>
                </View>

            }
            
        </>
        
    )
}

const styles = StyleSheet.create({
    containerLogin:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    loginButton:{
        width:"60%",
        height:"10%",
        backgroundColor:"#6AA0EE"
    },
    registerButton:{
        width:"60%",
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
        width:"50%"
    },
    titleLogin:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    }

})
export default Login