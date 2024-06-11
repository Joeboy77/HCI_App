import Search from '../components/Search'
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, Touchable, Pressable } from 'react-native'
import React, { useState } from 'react'
import Vector from '../assets/images/Vector.png'

export default function Home() {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <>
        <Search />
        <View style={styles.container}>
            <View >
                <View style={styles.boxMain}>
                    <Pressable style={[styles.box1, isPressed && styles.box1Pressed ]}
                        onPressIn={()=> setIsPressed(true)}
                        onPressOut={()=>setIsPressed(false)}
                        >
                            <View style={[styles.imageBox, isPressed && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, isPressed && styles.lawTextPressed]}>Law</Text>
                    </Pressable>
                    <Pressable style={[styles.box1, isPressed && styles.box1Pressed ]}
                        onPressIn={()=> setIsPressed(true)}
                        onPressOut={()=>setIsPressed(false)}
                        >
                            <View style={[styles.imageBox, isPressed && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, isPressed && styles.lawTextPressed]}>Politics</Text>
                    </Pressable>
                </View>
                <View style={styles.boxMain}>
                    <Pressable style={[styles.box1, isPressed && styles.box1Pressed ]}
                        onPressIn={()=> setIsPressed(true)}
                        onPressOut={()=>setIsPressed(false)}
                        >
                            <View style={[styles.imageBox, isPressed && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, isPressed && styles.lawTextPressed]}>Geography</Text>
                    </Pressable>
                    <Pressable style={[styles.box1, isPressed && styles.box1Pressed ]}
                        onPressIn={()=> setIsPressed(true)}
                        onPressOut={()=>setIsPressed(false)}
                        >
                            <View style={[styles.imageBox, isPressed && styles.imageBoxPressed]}>
                                <Image source={Vector} />
                            </View>
                            <Text style={[styles.lawText, isPressed && styles.lawTextPressed]}>Computer Science</Text>
                    </Pressable>
                </View>
            </View>
        </View>
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
