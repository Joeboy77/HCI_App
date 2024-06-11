import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function Search(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <TextInput placeholder='Book Title'  returnKeyType='search' style={styles.input}/>
                    <EvilIcons name="search" size={24} color="black" style={{marginTop: -35, marginLeft: 10}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 40
    },
    
    input: {
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderColor: '#6E4BB5',
        borderRadius: 15,
        paddingLeft: 50,
    }
})