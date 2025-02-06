import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <TextInput style={styles.inputField} placeholder="Username"/>
      <TextInput style={styles.inputField} placeholder="Password"/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  }
})