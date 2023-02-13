
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import {useState} from 'react'
import ModalError from '../modal/ModalError'
import {createUser, requestUserAcount} from '../../services/spaceTraderServices'
import * as SecureStore from 'expo-secure-store'

const KEY_STORAGE = "my-key"

const Login = ({setUserAcount , setUserToken, userToken}) =>{

    const [value, setValue] = useState('')
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [color, setColor] = useState('')
    const [error , setError] = useState(false)

    const handlerValue = (data) =>{
        setValue(data)
        console.log(data)
    }

    const sendRegister = () =>{
        
        const sendUserName = async()=>{
            try{
                
                const data = await createUser(value)
                const err = data.error
                console.log(err)
                
                const token = data.token
                  
                await SecureStore.setItemAsync(KEY_STORAGE, token)
                  
                setUserAcount(await requestUserAcount(token))
                setValue('')
                setRegister(false)
                  
                  
                
            }catch(err){
              
              setError(true)
            }
        }
        if(value){
            sendUserName()
        }else{
            setError(true)
        }
        
        
    }
    
    const sendLogin = () =>{
        const sendUserToken = async () =>{
            try{
            const user = await requestUserAcount(value)
            console.log(user)
              
            await SecureStore.setItemAsync(KEY_STORAGE,token)
            setUserAcount(user)
            setLogin(false)
            setValue('')
            }catch(err){
                setColor("red")
            
                setTimeout(()=>{
                    setColor("black")
                    setError(false)
                },1000)
            }
          }
        if(value!==''){
            sendUserToken()
        }else{
            setColor("red")
            
            setTimeout(()=>{
                setColor("black")
                setError(false)
            },1000)
        }
        
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
                    <TextInput style={{...styles.inputLogin, borderColor:color}}
                    placeholder="add token"
                    onChangeText={handlerValue}
                    value={value}
                    
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.loginButton} onPress={()=>sendLogin()}>
                            <Text style={styles.textButton}>
                                Login
                            </Text>
                        </Pressable>
                        <Pressable onPress={()=>setLogin(false)} style={styles.cancelButton}>
                            <Text style={styles.textButton}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            }
            {
            register === false
            ?
            null
            :
            <View style={styles.containerLogin}>
                <ModalError error={error} setError={setError}/>
                <Text style={styles.titleLogin}>PLEASE, INTRODUCE YOUR USERNAME</Text>
                <View style={styles.buttonBox}>
                    <TextInput style={styles.inputLogin}
                    placeholder="introduce userName"
                    onChangeText={handlerValue}
                    value={value}/>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.registerButton} onPress={()=>sendRegister()}>
                            <Text style={styles.textButton}>
                                Register
                            </Text>
                        </Pressable>
                        <Pressable onPress={()=>setRegister(false)} style={styles.cancelButton}>
                            <Text style={styles.textButton}>Cancel</Text>
                        </Pressable>
                    </View>
                    
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
    buttonContainer:{
        height:"100%",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        
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