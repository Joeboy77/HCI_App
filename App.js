import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/Landing';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
