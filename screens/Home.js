import Search from '../components/Search'
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, Touchable, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Vector from '../assets/images/Vector.png'

export default function Home({ navigation }) {
    
  const [pressedStates, setPressedStates] = useState(Array(8).fill(false));

  const handlePressIn = (index) => {
    const newPressedStates = [...pressedStates];
    newPressedStates[index] = true;
    setPressedStates(newPressedStates);
  };

  const handlePressOut = (index) => {
    const newPressedStates = [...pressedStates];
    newPressedStates[index] = false;
    setPressedStates(newPressedStates);
  };
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} >
        <Search />
        <View style={styles.container}>
            <View >
                <View style={styles.boxMain}>
                    <Pressable 
                        style={[styles.box1, pressedStates[0] && styles.box1Pressed]}
                        onPress={()=> navigation.navigate("Law", {name: 'Law'})}
                        onPressIn={() => handlePressIn(0)}
                        onPressOut={() => handlePressOut(0)}
                        
                        >
                            <View style={[styles.imageBox, pressedStates[0] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[0] && styles.lawTextPressed]}>Law</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.box1, pressedStates[1] && styles.box1Pressed]}
                        onPress={()=> navigation.navigate("Politics", {name: 'Politics'})}
                        onPressIn={() => handlePressIn(1)}
                        onPressOut={() => handlePressOut(1)}
                        >
                            <View style={[styles.imageBox, pressedStates[1] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[1] && styles.lawTextPressed]}>Politics</Text>
                    </Pressable>
                </View>
                <View style={styles.boxMain}>
                    <Pressable 
                        style={[styles.box1, pressedStates[2] && styles.box1Pressed]}
                        onPressIn={() => handlePressIn(2)}
                        onPressOut={() => handlePressOut(2)}
                        >
                            <View style={[styles.imageBox, pressedStates[2] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[2] && styles.lawTextPressed]}>Geography</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.box1, pressedStates[3] && styles.box1Pressed]}
                        onPressIn={() => handlePressIn(3)}
                        onPressOut={() => handlePressOut(3)}
                        >
                            <View style={[styles.imageBox, pressedStates[3] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[3] && styles.lawTextPressed]}>Computer Science</Text>
                    </Pressable>
                </View>
                <View style={styles.boxMain}>
                    <Pressable 
                        style={[styles.box1, pressedStates[4] && styles.box1Pressed]}
                        onPressIn={() => handlePressIn(4)}
                        onPressOut={() => handlePressOut(4)}
                        >
                            <View style={[styles.imageBox, pressedStates[4] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[4] && styles.lawTextPressed]}>Philosopy</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.box1, pressedStates[5] && styles.box1Pressed]}
                        onPressIn={() => handlePressIn(5)}
                        onPressOut={() => handlePressOut(5)}
                        >
                            <View style={[styles.imageBox, pressedStates[5] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[5] && styles.lawTextPressed]}>Languages</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.boxMain}>
                    <Pressable 
                        style={[styles.box1, pressedStates[6] && styles.box1Pressed]}
                        onPressIn={() => handlePressIn(6)}
                        onPressOut={() => handlePressOut(6)}
                        >
                            <View style={[styles.imageBox, pressedStates[6] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[6] && styles.lawTextPressed]}>History</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.box1, pressedStates[7] && styles.box1Pressed]}
                        onPressIn={() => handlePressIn(7)}
                        onPressOut={() => handlePressOut(7)}
                        >
                            <View style={[styles.imageBox, pressedStates[7] && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, pressedStates[7] && styles.lawTextPressed]}>Clasics</Text>
                    </Pressable>
                </View>
        </View>
        </ScrollView>
      </>
    )
  
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30
    },
    boxMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    box1: {
        width: 150,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#FDF4EF',
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOpacity: 1,
        shadowRadius: '0 0 21 4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        paddingVertical: 10,
    },
    box1Pressed: {
        backgroundColor:'#6E4BB5'
    },
    imageBox: {
        width: 50,
        height: 50,
        backgroundColor: '#6E4BB5',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBoxPressed: {
        backgroundColor: '#fff'
    },
    lawText: {
        fontSize: 16,
        color: '#6E4BB5',
        fontWeight: '300',
        marginTop: 15
    },
    lawTextPressed: {
        color: '#fff'
    }
})
