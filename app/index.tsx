<<<<<<< Updated upstream
import { View, Text, TextInput, Button } from "react-native";
=======
// Date Created: 7/2/25
// Author: Neeraj Bachwani, Harry Jung, Abhijith Krishnan
// Description: This file contains the main login page of the app.

import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
>>>>>>> Stashed changes
import { StyleSheet } from "react-native";
import Validations from "../components/validations";
import { useEffect, useState } from "react";
import Credentials from "../credentials.json"

import CalgaryImage from "../assets/calgary.jpg";
import EdmontonImage from "../assets/edmonton.jpg";

export default function Index() {
<<<<<<< Updated upstream
  const defaultMsg = 'The following errors were found: \n';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
=======
  const defaultMsg = "The following error was found: \n";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
>>>>>>> Stashed changes
  const [alertMsg, setAlertMsg] = useState(defaultMsg);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState("Calgary");

  // press a button to call validation methods on both textInput associated values.
  const checkFields = () => {
    setAlertMsg(defaultMsg);
    checkUsernameFormat(username);
    checkPasswordFormat(password);
    validateCredentials(username, password);

<<<<<<< Updated upstream
    if (alertMsg !== defaultMsg) {
      return;
    }
=======
    if (!checkUsernameFormat(username)) return;
    if (!checkPasswordFormat(password)) return;
    if (!validateCredentials(username, password)) return;

    setIsLoggedIn(true);
>>>>>>> Stashed changes
  };

  // call a validation method from the Validations class which checks if the username is at least 5 characters long.
  const checkUsernameFormat = (username: string) => {
    if (!Validations.validateUsernameLength(username)) {
<<<<<<< Updated upstream
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
=======
      setAlertMsg(
        (prevMsg) => prevMsg + "Username must be at least 5 characters long. \n"
      );
      return false;
    }
    return true;
  };

  // Call a validation method from the Validations class which checks if the password is in the correct format.
  const checkPasswordFormat = (password: string) => {
    const validationResult = Validations.validatePasswordFormat(password);

    if (Array.isArray(validationResult) && validationResult.length > 0) {
      setAlertMsg((prevMsg) => prevMsg + validationResult[0]); // Show only first error
      return false;
    }

    return true;
  };

  // Validate the credentials entered by the user against the credentials stored in the credentials.json file.
  const validateCredentials = (username: string, password: string) => {
    const user = Credentials.users.find((user) => user.username === username);

    // Checking if user exists
    if (!user) {
      setAlertMsg((prevMsg) => prevMsg + "User not found.");
      return false;
    }

    // Matching the password
    if (user.password !== password) {
      setAlertMsg((prevMsg) => prevMsg + "Incorrect password.");
      return false;
>>>>>>> Stashed changes
    }

    return true;
  };
<<<<<<< Updated upstream
  
  return (
    <View>
      <TextInput style={styles.inputField} placeholder="Username" value={username} onChangeText={setUsername}/>
      <TextInput secureTextEntry={true} style={styles.inputField} placeholder="Password" value={password} onChangeText={setPassword}/>
      {/* Add the routing to the button */}
      <Button title="Submit" onPress={() => checkFields()}/>
      <Text style={styles.errorText}>{alertMsg !== defaultMsg ? alertMsg : ''}</Text>
=======

  if (!isLoggedIn) {
    return (
      <View>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputField}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Submit" onPress={() => checkFields()} />
        <Text style={styles.errorText}>
          {alertMsg !== defaultMsg ? alertMsg : ""}
        </Text>
      </View>
    );
  }

  const CityPage = ({ city, url, image, info }) => (
    <View style={styles.page}>
      <Text style={styles.title}>{city}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        Go to city page
      </Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setCurrentTab("Calgary")}
        >
          <Text style={styles.tabText}>Calgary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setCurrentTab("Edmonton")}
        >
          <Text style={styles.tabText}>Edmonton</Text>
        </TouchableOpacity>
      </View>
      {currentTab === "Calgary" && (
        <CityPage
          city="Calgary"
          url="https://www.calgary.ca/home.html"
          image={CalgaryImage}
          info="Calgary is a city in the western Canadian province of Alberta. It is situated at the confluence of the Bow River and the Elbow River in the south of the province."
        />
      )}
      {currentTab === "Edmonton" && (
        <CityPage
          city="Edmonton"
          url="https://www.edmonton.ca/"
          image={EdmontonImage}
          info="Edmonton is the capital city of the Canadian province of Alberta. Edmonton is on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region."
        />
      )}
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  errorText: {
<<<<<<< Updated upstream
    color: 'red',
  }
})
=======
    color: "red",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
});
>>>>>>> Stashed changes
