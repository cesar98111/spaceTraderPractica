import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { requestBuyShip } from "../../services/spaceTraderServices"
import { useNavigation } from "@react-navigation/native"

const InfoShips = ({shipList, buyShip}) =>{
    
    const navigate = useNavigation()
    
    const buyButtonHandler = async() =>{
        
        const location = shipList.purchaseLocations
        const type = shipList.type
        await buyShip(location,type)
        //await requestBuyShip(userToken, location, type)
        navigate.navigate("Locations")

      
    }

    const renderImage = () =>{
        switch(shipList.type){
            case "JW-MK-I":
                return require("../../assets/JW-MK-I.png")
            case "JW-MK-II":
                return require("../../assets/JW-MK-II.jpg")
            case "GR-MK-I":
                return require("../../assets/GR-MK-I.jpg")
            case "ZA-MK-II":
                return require("../../assets/ZA-MK-II.jpg")
            case "ZA-MK-III":
                return require("../../assets/ZA-MK-III.png")
            case "EM-MK-I":
                return require("../../assets/EM-MK-I.jpg")
            case "HM-MK-I":
                return require("../../assets/HM-MK-I.png")
            case "GR-MK-II":
                return require("../../assets/GR-MK-II.jpg")
            case "GR-MK-III":
                return require("../../assets/GR-MK-III.jpg")
            case "HM-MK-III":
                return require("../../assets/HM-MK-III.jpg")
            case "TD-MK-I":
                return require("../../assets/TD-MK-I.jpg")
        }
    }
    return(
        <View style = {styles.containerInfo}>
            <View style={styles.containerImage}>
                <Image style={styles.shipImage} source={renderImage()}/>
            </View>
            <Text style ={styles.infoText}>
                type: {shipList.type}
            </Text>
            <Text style ={styles.infoText}>
                speed: {shipList.speed}
            </Text >
            <Text style ={styles.infoText}>
                weapons:{shipList.weapons}
            </Text>
            <Text style ={styles.infoText}>
                cargo: {shipList.maxCargo}
            </Text>
            <View style={styles.containerButton}>
                <Pressable style={styles.buttonBuy} onPress={()=>buyButtonHandler()}>
                    <Text style={styles.textButton}>Buy</Text>
                </Pressable>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    containerInfo:{
        width:"100%",
        backgroundColor:"#00141A",
        marginBottom:10,
        padding:30
    },
    infoText:{
        color: "white",
        marginBottom:7,
        fontWeight:"bold"
        
    },
    shipImage:{
        height:100,
        width:180,
        borderRadius:5
    },
    containerImage:{
        alignItems:"center",
        marginBottom:20
    },
    containerButton:{
        width:"100%",
        alignItems:"center"
    },
    buttonBuy:{
        width:"40%",
        height:35,
        backgroundColor:"#AB6100",
        borderColor:"#663600",
        borderStyle:"solid",
        borderWidth:3
    },
    textButton:{
        color:"white",
        height:"100%",
        width:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    }
})

export default InfoShips