import axios from 'axios';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import {userContext} from '../context/userContext';

export default function Profile({navigation}) {
  const {user, setUser} = useContext(userContext);
  const [Fname, setFname] = useState(null);
  const [Lname, setLname] = useState(null);
  const [tel, setTel] = useState(null);
  const [id_card_no, Set_id_card_no] = useState(null);
  const [userID, setUserID] = useState(null);
  const [show, setShow] = useState(false);

  const handler = async () => {
    const response = await axios
      .post('http://192.168.1.39:5000/CreateCustomer', {
        customerID: user[0].userID,
        Fname: Fname,
        Lname: Lname,
        tel: tel,
        id_card_no: id_card_no,
      })
      .then(response => console.log(response.data))
      .then(() => {
        setShow(true);
        const timer = setTimeout(() => {
          navigation.navigate('Menu');
          clearTimeout(timer);
        }, 4000);
      });
  };
  return (
    <View style={styles.container}>
      <Modal visible={show} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000099',
          }}>
          <View style={styles.modal}>
            <Image
              style={{}}
              source={require('../assets/check-mark-button.png')}></Image>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Success
            </Text>
            <Text style={{fontWeight: '500', fontSize: 15, color: '#A6AAB4'}}>
              Going to Main Menu
            </Text>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 20,
            }}>
            User Profile
          </Text>
          <Image
            source={require('../assets/profile.jpg')}
            style={styles.image}
          />
        </View>
        <View style={{paddingTop: 50}}>
          <Text style={{color: '#888888', fontSize: 16, fontWeight: 'bold'}}>
            First name
          </Text>
          <TextInput
            onChangeText={setFname}
            style={{borderColor: '#888888', borderBottomWidth: 2, padding: 5}}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{color: '#888888', fontSize: 16, fontWeight: 'bold'}}>
            Last name
          </Text>
          <TextInput
            onChangeText={setLname}
            style={{borderColor: '#888888', borderBottomWidth: 2, padding: 5}}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{color: '#888888', fontSize: 16, fontWeight: 'bold'}}>
            ID Card Number (13 digits)
          </Text>
          <TextInput
            onChangeText={Set_id_card_no}
            style={{borderColor: '#888888', borderBottomWidth: 2, padding: 5}}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{color: '#888888', fontSize: 16, fontWeight: 'bold'}}>
            Phone number
          </Text>
          <TextInput
            onChangeText={setTel}
            style={{borderColor: '#888888', borderBottomWidth: 2, padding: 5}}
          />
        </View>
        <TouchableOpacity
          style={{marginBottom: 100, height: 100, paddingTop: 40}}
          onPress={handler}>
          <View
            style={[
              {
                backgroundColor: '#FF6633',
                borderRadius: 10,
                height: 50,
                width: 315,
                alignItems: 'center',
                justifyContent: 'center',
              },
              styles.button,
            ]}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {borderBottomColor: '#000'},
  modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
