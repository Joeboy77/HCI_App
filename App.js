import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/Landing';
import Search from './components/Search';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
