import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Search from './components/Search';
import Home from './screens/Home';
import Politics from './screens/Politics'
import Geography from './screens/Geography'
import ComputerScience from './screens/ComputerScience'
import Philosophy from './screens/Philosophy'
import Languages from './screens/Languages'
import Clasics from './screens/Clasics'
import Law from './screens/Law';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <View style={styles.container}>
      
      
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={
          {
              cardStyle: {backgroundColor: '#fff'},
              headerTintColor: '#fff'
          }
        }
        >
          <Stack.Screen name='Home' component={Home}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen name='Law' component={Law}
          options={{
            title: 'Law',
            headerStyle: {
              backgroundColor: '#6E4BB5',
            },
            
          }}
          />
          <Stack.Screen name='Politics' component={Politics}
          options={{
            title: 'Politics',
            headerStyle: {
              backgroundColor: '#6E4BB5',
            },
          }}
          />
          <Stack.Screen name='Geography' component={Geography}/>
          <Stack.Screen name='Computer Science' component={ComputerScience}/>
          <Stack.Screen name='Philosophy' component={Philosophy}/>
          <Stack.Screen name='Languages' component={Languages}/>
          <Stack.Screen name='Clasics' component={Clasics}/>
        </Stack.Navigator>
      </NavigationContainer> 
      
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
