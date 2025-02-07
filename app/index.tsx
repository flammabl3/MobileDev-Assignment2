import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import Validations from '../components/validations';
import { useState } from "react";
import Credentials from "../credentials.json"

export default function Index() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // press a button to call validation methods on both textInput associated values.
  const checkFields = () => {


    checkUsernameLength(username);
    checkPasswordFormat(password);

    validateCredentials(username, password);
    
  };

  // call a validation method from the Validations class which checks if the username is at least 5 characters long.
  const checkUsernameLength = (username: string) => {
    if (!Validations.validateUsernameLength(username)) {
      alert('Username must be at least 5 characters long');
      return;
    } 
  }

  //call a validation method from the Validations class which checks if the password is in the correct format.
  const checkPasswordFormat = (password: string) => {
  
    if (!Validations.validatePasswordFormat(password)) {
      alert('Password In wrong format'); 
      // password too short alert , password must contain at least one uppercase letter, too long should be different ?
      return;
    } 
    
  };

  // validate the credentials entered by the user against the credentials stored in the credentials.json file.
  const validateCredentials = (username: string, password: string) => {
    const user = Credentials.users.find((user) => user.username === username);


    //checking if user exists
    if (!user){
      alert("User not found");
      return;
    }

    //matching the password
    if (user.password !== password){
      alert("Incorrect password");
      return;
    }

    //route to next page if credentials are correct PART - 4 (TBD BY ABHIJITH)

  };
  return (
    <View>
      <TextInput style={styles.inputField} placeholder="Username" value={username} onChangeText={setUsername}/>
      <TextInput style={styles.inputField} placeholder="Password" value={password} onChangeText={setPassword}/>
      //Add the routing to the button
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