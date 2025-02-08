// Date Created: 7/2/25
//Author: Neeraj Bachwani , Harry Jung
// Description: This file contains the main login page of the app. It contains two text inputs for the user to enter their username and password. It also contains a button which when pressed calls the checkFields method which in turn calls the checkUsernameLength, checkPasswordFormat and validateCredentials methods. The checkUsernameLength method checks if the username is at least 5 characters long, the checkPasswordFormat method checks if the password is in the correct format and the validateCredentials method checks if the credentials entered by the user match the credentials stored in the credentials.json file. If any of the validations fail, an alert is shown to the user. If all validations pass, the user is routed to the next page (TBD by Abhijith).


import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import Validations from '../components/validations';
import { useEffect, useState } from "react";
import Credentials from "../credentials.json"

export default function Index() {
  const defaultMsg = 'The following errors were found: \n';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState(defaultMsg);

  // press a button to call validation methods on both textInput associated values.
  const checkFields = () => {
    setAlertMsg(defaultMsg);
    checkUsernameFormat(username);
    checkPasswordFormat(password);
    validateCredentials(username, password);

    if (alertMsg !== defaultMsg) {
      return;
    }
  };

  // call a validation method from the Validations class which checks if the username is at least 5 characters long.
  const checkUsernameFormat = (username: string) => {
    if (!Validations.validateUsernameLength(username)) {
      setAlertMsg(alertMsg => alertMsg + 'Username must be at least 5 characters long. \n');
      return;
    } 

    return true;
  }

  //call a validation method from the Validations class which checks if the password is in the correct format.
  const checkPasswordFormat = (password: string) => {
    const validationResult = Validations.validatePasswordFormat(password);
    // returns bool or array. bit weird.
    
    if (Array.isArray(validationResult)) {
      setAlertMsg(alertMsg => alertMsg + 'Password does not meet requirements. \n');
      for (let error of validationResult) {
        setAlertMsg(alertMsg => alertMsg + error + '\n');
      }

      return;
    } 
    return true;
  };

  // validate the credentials entered by the user against the credentials stored in the credentials.json file.
  const validateCredentials = (username: string, password: string) => {
    const user = Credentials.users.find((user) => user.username === username);

    //checking if user exists
    if (!user){
      setAlertMsg(alertMsg => alertMsg + "User not found.");
      return;
    }

    //matching the password
    if (user.password !== password){
      setAlertMsg(alertMsg => alertMsg + "Incorrect password.");
      return;
    }

    return true;
  };
  
  return (
    <View>
      <TextInput style={styles.inputField} placeholder="Username" value={username} onChangeText={setUsername}/>
      <TextInput secureTextEntry={true} style={styles.inputField} placeholder="Password" value={password} onChangeText={setPassword}/>
      {/* Add the routing to the button */}
      <Button title="Submit" onPress={() => checkFields()}/>
      <Text style={styles.errorText}>{alertMsg !== defaultMsg ? alertMsg : ''}</Text>
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
  },
  errorText: {
    color: 'red',
  }
})