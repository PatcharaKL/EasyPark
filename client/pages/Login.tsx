import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from "react-native";
export default function Login({navigation}) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [submit, setSubmit] = useState(false);

    const onPressHandler = () => {
      setSubmit(!submit);
      navigation.navigate('SelectType');
    };
    const signupHandler = () => {
      navigation.navigate('Register');
    }
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/EasyparkLogo.png")}
        ></Image>
        <View style={[{marginTop:60,marginBottom:20},styles.section]}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
          />
        </View>
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            inlineImageLeft="search_icon"
            secureTextEntry={true}
          />
        </View>
  
        <View style={{ alignItems:'flex-end', width:'80%' }}>
          <Text style={[{ marginTop: 15 }, styles.linkText]}>
            Forgot Password?
          </Text>
        </View>
  
        {/* {submit && <Text>Username is {username}</Text>} */}
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#ffa585" : "#f87444" },
            styles.button,
          ]}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <View style={[{ marginTop: 30 },styles.section]}>
          <Text>
            or <Text onPress={signupHandler} style={styles.linkText}>Sing up</Text>
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    section: {
      alignItems: "center",
      width: "100%",
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#A6AAB4",
      padding: 5,
      margin: 5,
      width: "80%",
    },
    text: {
      color: "#ffffff",
      margin: 10,
      fontWeight: "bold",
    },
    button: {
      width: "80%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      borderRadius: 6,
    },
    linkText: {
      color: "#F47346",
    },
    logo: {
      width: "80%",
      height: "20%",
      resizeMode: "contain",
    },
  });