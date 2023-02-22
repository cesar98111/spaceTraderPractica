import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { getShipsList } from "../../services/spaceTraderServices";

import InfoShips from "../Views/InfoShips";

const Ships = ({userToken, buyShip}) =>{

    const [shipList, setShipList] = useState([])

    useEffect(() =>{
        const getShips = async () =>{
            const list = await getShipsList(userToken)
            setShipList(list.shipListings)
           
        }
        getShips()
    },[])

    return(
        <ImageBackground source={require("../../assets/hangar.jpg")}>
            {
                shipList === null
                ?
                <Text>ACEDIENDO AL CATALOGO DE NAVES</Text>
                :
                
                <View style={Styles.containerList}>
                    <Text style={Styles.titleText}>LISTA DE NAVES DISPONIBLES</Text>
                    <FlatList style={Styles.list} data={shipList} renderItem={(List) =>{
                        console.log(List)
                            return(
                                <InfoShips
                                    key={List.index}
                                    shipList={List.item}
                                    userToken={userToken}
                                    buyShip={buyShip}
                                    />
                            )
                            
                        }}  
                    />
                    
                </View>
                
            }
        </ImageBackground>
            
       
    )
}


const Styles = StyleSheet.create({
    containerList:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    list:{
        width:"80%",
        height:"89%"
    },
    titleText:{
        marginTop:20,
        marginBottom:20,
        fontWeight:"bold",
        fontSize:25,
        color:"white"
    }
})

export default Ships