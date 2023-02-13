
import {View, Text} from 'react-native'

const Home = ({userAcount}) =>{
    return(
        <View>
            <Text>
                Hola:{userAcount.user.username}
            </Text>
        </View>
    )
}

export default Home