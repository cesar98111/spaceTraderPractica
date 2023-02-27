import { useState } from "react"
import { View, Text, Pressable , StyleSheet, FlatList} from "react-native"

const LocationsView = ({userToken, locationSystem})=>{
    const [locationList, setLocationList] = useState(locationSystem)
    
    return(
        <View>
            <Text>SISTEMAS DISPONIBLES</Text>
            <FlatList data = {locationList} renderItem={(value =>{
                return(
                    <View>
                        <Text>

                        </Text>
                        <Text>

                        </Text>
                        <Pressable>
                            <Text>
                                selecionar
                            </Text>
                        </Pressable>
                    </View>
                )
            })}/>
        </View>
    )
}


const create = StyleSheet.create({
    containerLocation:{

    }
})
export default LocationsView