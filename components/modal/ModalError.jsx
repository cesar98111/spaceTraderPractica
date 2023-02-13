import {View, Text , Pressable, Modal , StyleSheet} from 'react-native'



const ModalError = ({error, setError}) =>{
    return(
        <Modal visible={error} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.textBody}>
                        invalid nikname, please introduce other
                    </Text>
                        <Pressable style={styles.aceptButon} onPress={()=> setError(false)}>
                            <Text style={styles.textButton}>OK</Text>
                        </Pressable>
                    </View>
                </View>
                
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalContainer:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    modalView:{
        justifyContent:"space-around",
        alignItems:"center",
        height:"30%",
        width:"50%",
        backgroundColor:"#FA6137",
        borderRadius:10
    },
    textBody:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    aceptButon:{
        backgroundColor:"#FFBE01",
        height:"15%",
        width:"30%"
    },
    textButton:{
        textAlign:"center",
        textAlignVertical:"center",
        height:"100%",
        width:"100%",
        color:"white",
        fontWeight:"bold"
    }
})
export default ModalError