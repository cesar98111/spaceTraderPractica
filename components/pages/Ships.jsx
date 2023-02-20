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
            console.log(list)
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
                <View>
                    <Text>LISTA DE NAVES DISPONIBLES</Text>
                    <FlatList data={shipList} renderItem={(List) =>{
                            return(
                                <InfoShips
                                    key={List.item.type}
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

    }
})

export default Ships