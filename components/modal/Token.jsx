import { useEffect } from 'react'
import {View, Text, Pressable, StyleSheet, Modal} from 'react-native'


const Token = ({userToken, show, setShow}) =>{

    
    return(
        <Modal visible={show} transparent={true}>
            <View style={Styles.modalContainer}>
                <View style={Styles.viewModal}>
                    <Text style={Styles.tokenText}>
                        your token:{userToken}
                    </Text>
                    <Pressable style={Styles.confirmButton} onPress={()=> setShow(false)}>
                        <Text style={Styles.textButton}>
                            Acept
                        </Text>
                    </Pressable>
                </View>
            </View> 
        </Modal>
    )
}

const Styles = StyleSheet.create({
    modalContainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    viewModal:{
        justifyContent:"space-around",
        alignItems:"center",
        height:"15%",
        width:"90%",
        backgroundColor:"gray",
        borderRadius:20
    },
    confirmButton:{
        backgroundColor:"#6AA0EE",
        height:"15%",
        width:"20%"
    },
    textButton:{
        color:"white",
        height:"100%",
        textAlign:"center",
        textAlignVertical:"center"
    },
    tokenText:{
        fontSize:14,
        color:"white",
        fontWeight:"bold"
    }
})

export default Token
