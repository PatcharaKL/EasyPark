import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Register({navigation}) {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [submit, setSubmit] = useState(false);
  const onPressHandler = async () => {
    setSubmit(true);
    const response = await axios
      .post('http://192.168.1.39:5000/register', {
          username: username,
          email: email,
          password: password,
      })
      .then(response => console.log(response.data));
      navigation.navigate('Log In');
  };
  const GoToSignin = () => {
    navigation.navigate('Log In');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/EasyparkLogo.png')}></Image>
      <View style={[{marginTop: 60, marginBottom: 20}, styles.section]}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <View style={styles.section}>
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
            secureTextEntry={true}
          />
        </View>
      </View>

      {/* {submit && <Text>Username is {username}</Text>} */}
      <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <View style={[{marginTop: 30}, styles.section]}>
        <Text>
          Already have an account?{' '}
          <Text onPress={GoToSignin} style={styles.linkText}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#A6AAB4',
    padding: 5,
    margin: 5,
    width: '80%',
  },
  text: {
    color: '#ffffff',
    margin: 10,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: '#f87444',
  },
  linkText: {
    color: '#F47346',
  },
  logo: {
    width: '80%',
    height: '20%',
    resizeMode: 'contain',
  },
});
