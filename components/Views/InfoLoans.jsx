
import { View, Text, StyleSheet, Pressable } from "react-native";

const InfoLoans = ({loans, userToken}) =>{
    return(
    <View style={Styles.loansContainer}>
        <Text style={Styles.textStyle}>{loans.amount} Crd</Text>
        <Text style={Styles.textStyle}>Rate: {loans.rate} %</Text>
        <Text style={Styles.textStyle}>Term: {loans.termInDays}</Text>
        <Text style={Styles.textStyle}>Type: {loans.type}</Text>
        <View style={Styles.buttonContainer}>
            <Pressable style={Styles.buttonTake}>
                <Text style={Styles.textButton}>Take out</Text>
            </Pressable>
        </View>
    </View>
    )
}



const Styles = StyleSheet.create({
    loansContainer:{
        backgroundColor:"#2569F0",
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
        backgroundColor:"#FCC02D",
        width:"40%",
        padding:7
    },
    textButton:{
        textAlign:"center"
    }
    
})

export default InfoLoans