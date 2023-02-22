import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import { showLoans } from "../../services/spaceTraderServices";
import InfoLoans from "../Views/InfoLoans";

const Loans = ({userToken ,takeLoans}) =>{

    const [loansList, setLoansList] = useState()

    useEffect(()=>{
        const getLoansList = async() =>{
            
            const data = await showLoans(userToken)
            setLoansList(data.loans)
        }

        getLoansList()
    },[])


    return(
        <ImageBackground source={require("../../assets/comercio.jpg")}>
            {
                loansList === null
                ?
                <Text>CARGANDO</Text>
                :
                <View style ={Styles.containerLoans}>
                    <Text style={Styles.titleText}>
                        AVALIABLE LOANS
                    </Text>
                    <FlatList style={Styles.list} data={loansList} renderItem={(list)=>{
                        return(
                            <InfoLoans
                                key={list.index} 
                                loans={list.item}
                                takeLoans={takeLoans}
                            />
                        )
                    }} />
                </View>


            }
        </ImageBackground>
            
        
        

        
    )
}


const Styles = StyleSheet.create({
    containerLoans:{
        height:"100%",
        width:"100%",
        alignItems:"center"
    },
    list:{
        width:"80%"
    },
    titleText:{
        marginTop:20,
        marginBottom:20,
        fontWeight:"bold",
        fontSize:25
    }
})
export default Loans

