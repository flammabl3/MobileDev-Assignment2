// Date Created: 7/2/25
// Author: Neeraj Bachwani, Harry Jung
// Description: This file contains the main login page of the app.

import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import Validations from '../components/validations';
import { useEffect, useState } from "react";
import Credentials from "../credentials.json";

export default function Index() {
  const defaultMsg = 'The following error was found: \n';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlertMsg] = useState(defaultMsg);

  // Press a button to call validation methods on both textInput associated values.
  const checkFields = () => {
    setAlertMsg(defaultMsg);

    if (!checkUsernameFormat(username)) return;
    if (!checkPasswordFormat(password)) return;
    if (!validateCredentials(username, password)) return;
  };

  // Call a validation method from the Validations class which checks if the username is at least 5 characters long.
  const checkUsernameFormat = (username: string) => {
    if (!Validations.validateUsernameLength(username)) {
      setAlertMsg(prevMsg => prevMsg + 'Username must be at least 5 characters long. \n');
      return false;
    } 
    return true;
  };

  // Call a validation method from the Validations class which checks if the password is in the correct format.
  const checkPasswordFormat = (password: string) => {
    const validationResult = Validations.validatePasswordFormat(password);

    if (Array.isArray(validationResult) && validationResult.length > 0) {
      setAlertMsg(prevMsg => prevMsg + validationResult[0]); // Show only first error
      return false;
    }
    
    return true;
  };

  // Validate the credentials entered by the user against the credentials stored in the credentials.json file.
  const validateCredentials = (username: string, password: string) => {
    const user = Credentials.users.find((user) => user.username === username);

    // Checking if user exists
    if (!user) {
      setAlertMsg(prevMsg => prevMsg + "User not found.");
      return false;
    }

    // Matching the password
    if (user.password !== password) {
      setAlertMsg(prevMsg => prevMsg + "Incorrect password.");
      return false;
    }

    return true;
  };

  return (
    <View>
      <TextInput style={styles.inputField} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput secureTextEntry={true} style={styles.inputField} placeholder="Password" value={password} onChangeText={setPassword} />
      <Button title="Submit" onPress={() => checkFields()} />
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
});
