import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import Validations from '../components/validations';
import { useState } from "react";

export default function Index() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // press a button to call validation methods on both textInput associated values.
  const checkFields = () => {
    checkUsernameLength(username);
    checkPasswordFormat(password);
  };

  // call a validation method from the Validations class, which uses regex.
  const checkUsernameLength = (username: string) => {
    if (!Validations.validateUsernameLength(username)) {
      console.log("Invalid username"); //testing purposes
      alert('Username must be at least 5 characters long');
    } 
  }

  const checkPasswordFormat = (password: string) => {
  
    if (!Validations.validatePasswordFormat(password)) {
      console.log("Invalid password"); //testing purposes
      alert('Password In wrong format');
    } 
    
  };
  return (
    <View>
      <TextInput style={styles.inputField} placeholder="Username" value={username} onChangeText={setUsername}/>
      <TextInput style={styles.inputField} placeholder="Password" value={password} onChangeText={setPassword}/>
      <Button title="Submit" onPress={() => checkFields()}/>
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