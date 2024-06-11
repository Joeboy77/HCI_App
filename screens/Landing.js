import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import image1 from '../assets/images/image1.png'

export default function Landing({ navigation }) {
    return(
        <View style={styles.container}>
            <ImageBackground source={image1} style={styles.background}>
                <View style={styles.main}>
                <Text style={styles.hello}>Hello!</Text>
                <View style={styles.text}>
                <Text style={styles.welcome}>Welcome to LibAssist </Text>
                <Text style={styles.welcome}>Ready to start your next reading</Text>
                <Text style={styles.welcome}> adventure?</Text>
                </View>
                <TouchableOpacity style={styles.button} 
                onPress={()=> navigation.navigate("Home", {name: 'Home'})}
                >
                    <Text style={styles.get}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#6E4BB5',
    justifyContent: 'center',
    alignItems: 'center',
    
},
background: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%',
    justifyContent: 'center',
    
},
hello: {
    fontSize: 60,
    color: '#fff',
    fontWeight: '700',
    
},
welcome: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 17,
    marginBottom: 3
    
},
button: {
    width: 202,
    height: 58,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center'
},
get: {
    color: '#6E4BB5',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
},
main: {
    marginLeft: 70
},
text: {
    marginTop: 20
}
})