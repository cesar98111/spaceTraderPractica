import { View, Text } from "react-native";
import { useEffect } from "react";
import { showLoans } from "../../services/spaceTraderServices";


const Loans = ({userToken}) =>{

    useEffect(()=>{
        const getLoansList = async() =>{
            const data = await showLoans(userToken)
            console.log(data)
        }

        getLoansList()
    },[])


    return(
        <View>
            <Text>
                LOANS
            </Text>
        </View>
    )
}

export default Loans