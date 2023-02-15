
import {View, Text , StyleSheet ,Image, Pressable} from 'react-native'
import Token from '../modal/Token'

const Home = ({userAcount, userToken}) =>{
    return(
        <View style={styles.containerProfile}>
            <View style={styles.headerProfile}>
                <Image source={require("../../assets/astronauta.png")} style={styles.imageProfile}/>
                <Text style={styles.textProfile}>
                    {userAcount.user.username}
                </Text>
                <Pressable style={styles.buttonToken}>
                    <Text style={styles.buttonText}>Token</Text>
                </Pressable>
            </View>
            <View style={styles.creditProfile}>
                <Text style={styles.textProfile}>creditos: {userAcount.user.credits}</Text>                
            </View>
            <View style={styles.statusProfile}>
                <View style={styles.properties}>
                    <Image source={require("../../assets/spaceShip.png")} style={styles.imageIcons}/>
                    <Text style={styles.textProfile}>{userAcount.user.shipCount}</Text>
                </View>
                <View style={styles.properties}>
                    <Image source={require("../../assets/structures.png")} style={styles.imageIcons}/>
                    <Text style={styles.textProfile}>{userAcount.user.structureCount}</Text>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerProfile:{
        justifyContent:"space-around",
        alignItems:"center"
        
        
    },
    imageProfile:{
        height:90,
        width:90,
        borderRadius:100,
         
    },
    headerProfile:{
        marginTop:30,
        flexDirection:"row",
        backgroundColor:"#CCCCCC",
        alignItems:"center",
        justifyContent:"space-evenly",
        height:"25%",
        width:"80%",
        borderRadius:20
    },
    textProfile:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        height:"100%",
        textAlignVertical:"center"
    },
    creditProfile:{
        height:"15%",
        width:"80%",
        backgroundColor:"#CCCCCC",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    imageIcons:{
        height:50,
        width:50
    },
    statusProfile:{
        height:"40%",
        width:"80%",
        backgroundColor:"#CCCCCC",
        justifyContent:"space-around",
        alignItems:"center"
    },
    properties:{
        flexDirection:"row",
        justifyContent:"center",
        width:"85%"

    },
    buttonToken:{
        height:"10%",
        width:"20%",
        backgroundColor:"6AA0EE"
    },
    buttonText:{
        color:"white",
        height:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    }
})

export default Home