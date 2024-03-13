import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TaskCard from "./components/TaskCard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>Now this looks like a job for me so everybody just follows me cos we need a little contreversy and it feels so empty without me lalalala lalalala lalalala lalalala</Text> */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <TaskCard text="Walk my dog" />
          <TaskCard text="Go shopping" />
          <TaskCard text="Finish my project" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F99FF9",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 20
  },
});
