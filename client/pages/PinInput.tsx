import React, {useState, useEffect, useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {userContext} from '../context/userContext';
import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
const PinInput = ({navigation, route}) => {
  const {user,setUser} = useContext(userContext);
  const {price,INspace_id} = route.params;
  const [pin, setPin] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    if(pin.length == 4){
      console.log(pin.length)
      pinChecker();
    }else{
      console.log(pin.length)
    }
  },[pin])
  const pinChecker = async () => {    
    const res = await axios
      .put('http://192.168.1.39:5000/Payment', {
          pin: pin,
          userID: user[0].userID,
          price: price,
          spaceID: INspace_id,
      })
      .then(res => {
        console.log(res.data)
        if (res.data == true) {
          setShow(true);
          console.log('True');
          console.log(res.data);
          const timer = setTimeout(() => {
            navigation.navigate('Menu');
            clearTimeout(timer);
          }, 4000);
        }
        else{
          console.log('false');
          console.warn('Wrong PIN')
        }
      })
      .catch(err => console.log(err))
  };
  return (
    <SafeAreaView style={styles.container}>
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
              Payment Successfully
            </Text>
            <Text style={{fontWeight: '500', fontSize: 15, color: '#A6AAB4'}}>
              Thank you!
            </Text>
          </View>
        </View>
      </Modal>
      <View style={[{marginTop: 10}, styles.Header]}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pin</Text>
      </View>

      <View>
        <SmoothPinCodeInput
          autoFocus={true}
          password
          mask="﹡"
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: 'gray',
          }}
          cellStyleFocused={{
            borderColor: 'black',
          }}
          value={pin}
          onTextChange={code => {
            setPin(code);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default PinInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'column',
    backgroundColor: '#f5f4f7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  section: {
    top: '10%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: '90%',
    height: '50%',
    shadowColor: '#000',
    borderRadius: 10,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  BottomButton: {
    top: '50%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Header: {
    height: '8%',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
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
  modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
