import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getShipsList } from "../../services/spaceTraderServices";

import InfoShips from "../Views/InfoShips";

const Ships = ({userToken}) =>{

    const [shipList, setShipList] = useState([])

    useEffect(() =>{
        const getShips = async () =>{
            const list = await getShipsList(userToken)
            setShipList(list.shipListings)
           
        }
        getShips()
    },[])

    return(
        <View>
            {
                shipList === null
                ?
                <Text>ACEDIENDO AL CATALOGO DE NAVES</Text>
                :
                <View style={Styles.containerList}>
                    <Text>LISTA DE NAVES DISPONIBLES</Text>
                    <FlatList style={Styles.list} data={shipList} renderItem={(List) =>{
                        console.log(List)
                            return(
                                <InfoShips
                                    key={List.index}
                                    shipList={List.item}
                                    />
                            )
                            
                        }}  
                    />
                    
                </View>
                
            }
        </View>
    )
}


const Styles = StyleSheet.create({
    containerList:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    list:{
        width:"80%"
    }
})

export default Ships