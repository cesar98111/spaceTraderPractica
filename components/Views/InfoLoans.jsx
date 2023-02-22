
import { View, Text, StyleSheet, Pressable } from "react-native";
import { takeAvaliableLoans } from "../../services/spaceTraderServices";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const InfoLoans = ({loans, takeLoans}) =>{

    const navigate = useNavigation()

    const handlerLoans = async() =>{
        try{
            await takeLoans(loans.type)
            navigate.navigate("Home")
        }catch(err){
            console.log(err)
        }
        
    }
     

    return(
    <View style={Styles.loansContainer}>
        <Text style={Styles.textStyle}>{loans.amount} Crd</Text>
        <Text style={Styles.textStyle}>Rate: {loans.rate} %</Text>
        <Text style={Styles.textStyle}>Term: {loans.termInDays}</Text>
        <Text style={Styles.textStyle}>Type: {loans.type}</Text>
        <View style={Styles.buttonContainer}>
            <Pressable style={Styles.buttonTake} onPress={handlerLoans}>
                <Text style={Styles.textButton}>Take out</Text>
            </Pressable>
        </View>
    </View>
    )
}



const Styles = StyleSheet.create({
    loansContainer:{
        backgroundColor:"#00141A",
        width:"100%",
        padding:20
    },
    textStyle:{
        color: "white",
        fontWeight:"bold",
        marginLeft:40
    },
    buttonContainer:{
        marginTop:15,
        width:"100%",
        alignItems:"center",
        
    },
    buttonTake:{
        backgroundColor:"#AB6100",
        width:"40%",
        padding:7,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#663600"
        
    },
    textButton:{
        textAlign:"center",
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
    
})

export default InfoLoans