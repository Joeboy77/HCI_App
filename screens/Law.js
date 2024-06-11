import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import Search from '../components/Search'
import bookImage from '../assets/images/lawBlue.png'
import smallIcon from '../assets/images/smallIcon.png'

export default function Law()  {
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
      shadowOpacity: '2'
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
    
   }
})