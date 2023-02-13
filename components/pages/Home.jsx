
import {View, Text , StyleSheet ,Image} from 'react-native'

const Home = ({userAcount}) =>{
    return(
        <View>
            <View>
                <Image source={require("../../assets/astronauta.png")} style={styles.imageProfile}/>

                
                <Text>
                    {userAcount.user.username}
                </Text>
            </View>
            <View>

            </View>
            <View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerProfile:{

    }
})

export default Home