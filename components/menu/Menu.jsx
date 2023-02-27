import { DrawerContentScrollView } from "@react-navigation/drawer"

import { StyleSheet, View,Text, Pressable, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"


const Menu = ({navigation, userAcount, renderImage}) =>{
    const navigate = useNavigation()
    
    useEffect(()=>{
        console.log("hola")
        console.log(userAcount)
    },[])
    return(
        <DrawerContentScrollView style={{backgroundColor:"#00141A"}}>
            {
                (userAcount === undefined) || (userAcount === null)
                ?
                
                    <Pressable style={Styles.menuButton}>
                        <Text style={Styles.textButton}>Login</Text>
                    </Pressable>
                
                       
                :
                <View style={Styles.container}>
                    <View style={Styles.containerProfile}>
                        <Image source={renderImage()} style={Styles.image}/>
                        <Text style={Styles.textProfile}>{userAcount.user.username}</Text>
                    </View>
                    
                        <Pressable style={Styles.menuButton} onPress={()=> navigate.navigate("Home")}>
                            <Text style={Styles.textButton}>Home</Text>
                        </Pressable>
                        <Pressable style={Styles.menuButton} onPress={()=> navigate.navigate("Ships")}>
                            <Text style={Styles.textButton}>Ships</Text>
                        </Pressable> 
                        <Pressable style={Styles.menuButton} onPress={()=> navigate.navigate("Loans")}>
                            <Text style={Styles.textButton}>Loans</Text>
                        </Pressable>
                        <Pressable style={Styles.menuButton} onPress={()=> navigate.navigate("Logout")}>
                            <Text style={Styles.textButton}>Logout</Text>
                        </Pressable>
                    
                </View>
                
                   

            }
            
        </DrawerContentScrollView>
    )
}

const Styles = StyleSheet.create({
    containerMenu:{
        height:"100%",
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#DBDBDB",
        marginLeft:26,
        
    },
    menuButton:{
        backgroundColor:"grey",
        margin:10,
        width:"80%",
        height:40,
        borderRadius:20,
        marginLeft: 23
    },
    textButton:{
        height:"100%",
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    },
    containerProfile:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"

    },
    image:{
        height:110,
        width:110,
        borderRadius:100
    },
    textProfile:{
        height:"100%",
        width:"50%",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:30,
        color:"white"
        
    }
    
})

export default Menu