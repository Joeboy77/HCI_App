import { Text, View, StyleSheet, Image, ImageBackground, FlatList } from 'react-native'
import Search from '../components/Search'
import bookImage from '../assets/images/lawBlue.png'
import smallIcon from '../assets/images/smallIcon.png'
import Phi1 from '../assets/images/phi1.jpg'
import Phi2 from '../assets/images/phi2.jpg'
import Phi3 from '../assets/images/phi3.jpeg'

export default function Philosophy(){
  const Books = [
    {
      id: '1',
      title: 'Book name / Author'
    },
    {
      id: '2',
      title: 'Book name / Author'
    },
    {
      id: '3',
      title: 'Book name / Author'
    },
    {
      id: '5',
      title: 'Book name / Author'
    }
  ]
  const data2 = [
    {
      id: '1',
      title: 'SOCIAL PHIL',
      image: Phi1
    },
    {
      id: '2',
      title: 'POLITICAL PHIL',
      image: Phi2
    },
    {
      id: '3',
      title: 'PHILOSOPHY HIGH',
      image: Phi3
    }
  ]
    return (
      <>
      <Search />
      <View style={styles.container}>
        <View style={styles.flat}>
          <FlatList 
          data={Books}
          renderItem={({item}) => (
            <View style={styles.mainFlat}>
              <View style={styles.flatItems}>
                <Image source={bookImage} style={styles.bookImage}/>
                <Text style={styles.textFlat}>{item.title}</Text>
              </View>
            </View>
          )}
          />
          </View>
        <View style={styles.hero}>
          <Image source={smallIcon} style={styles.smallIcon}/>
          <Text style={styles.read}>ALSO READ</Text>
        </View>
        <View style={styles.data2}>
          <FlatList 
          data={data2}
          renderItem={({item}) => (
            <ImageBackground source={item.image} style={styles.flatView}>
              <View style={styles.titleBox}>
                <Text style={styles.readText}>{item.title}</Text>
              </View>
            </ImageBackground>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      </>
    )
}
const styles = StyleSheet.create({
  container: {

  },
  bookImage: {
    width: 20,
    height: 20,
  },
  flatItems:{
    height: 60,
    width: '90%',
    backgroundColor: '#FDF4EF',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    gap: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: '2',
    objectFit: 'contain'
  },
  flat: {
    marginTop: 40,
    display: 'flex',
  },
  mainFlat: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
 textFlat: {
  fontWeight: '400'
 },
 smallIcon: {
  width: 25,
  height: 25,
  marginTop: 4
 },
 read: {
  color: '#A570D6',
  fontSize: 26,
  fontWeight: '500'
 },
 hero: {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 20,
  marginTop: 40,
  gap: 30,
  
 },
 flatView: {
  width: 150,
  height: 150,
  marginHorizontal: 10,
  display: 'flex',
  justifyContent: 'flex-end',
 },
 data2: {
  marginLeft: 10,
  marginTop: 40
 },
 titleBox: {
  width: 150,
  height: 30,
  backgroundColor: '#FDF4EF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderColor: '#6E4BB5',
 },
 readText: {
  color: '#6E4BB5',
  fontWeight: '500',
 }
})