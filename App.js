import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Clicked")

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Now this looks like a job for me so everybody just follows me cos we need a little contreversy and it feels so empty without me lalalala lalalala lalalala lalalala</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
