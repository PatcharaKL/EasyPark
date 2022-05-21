import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import moment from 'moment';
import {userContext} from '../context/userContext';
const ParkingCar = ({navigation, route}) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [TotalTime, setTotalTime] = useState(0);
  const {floor, type, space, typeID, pricePerH} = route.params;
  const [count, setCount] = useState(0);
  const [checkIn, setCheckIn] = useState('-');
  const [checkOut, setCheckOut] = useState('-');
  const {user, setUser} = useContext(userContext);

  const buttonHandler = async () => {
    setCount(count + 1);
    setPressed(!pressed);
    setTimerOn(!timerOn);
    if (count == 0) {
      const convertedCI = moment().format('MM/DD/YYYY hh:mm:ss');
      setCheckIn(convertedCI);
    }
    if (count >= 1) {
      const response = await axios
        .post('http://192.168.1.39:5000/postParking', {
          INparking_time: (Math.floor((time / 3600000) % 60) + 1),
          INtotal_price: (Math.floor((time / 3600000) % 60) + 1) * pricePerH,
          INcheck_in: checkIn,
          INcheckout: moment().format('MM/DD/YYYY hh:mm:ss'),
          INspace_id: space[0].space_id,
          INcustomerID: user[0].userID,
        })
        .then(res => console.log(res.data));
      navigation.navigate('PIN', {
        price: (Math.floor((time / 3600000) % 60) + 1) * pricePerH,
        INspace_id: space[0].space_id,
      });
    }
  };
  useEffect(() => {
    let interval = null;
    console.log('Get', space);
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.HeadText, {alignSelf: 'center', marginTop: 20}]}>
          Parking
        </Text>
      </View>
      <View style={[{alignSelf: 'center'}]}>
        <Text
          style={[styles.Timer, {color: count > 0 ? '#000000' : '#969696'}]}>
          {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
          <Text>
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
            <Text>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</Text>
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.section,
          {
            alignSelf: 'center',
            paddingHorizontal: 20,
            paddingVertical: 12,
            justifyContent: 'space-evenly',
          },
        ]}>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3B414B',
            }}>
            Details
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#757F8C'}}>Space</Text>
          <Text style={{color: '#757F8C'}}>{space[0].space_id}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#757F8C'}}>Type</Text>
          <Text style={{color: '#757F8C'}}>{type}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#757F8C'}}>Floor</Text>
          <Text style={{color: '#757F8C'}}>{floor}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#757F8C'}}>Check-In Time:</Text>
          <Text style={{color: '#757F8C'}}>{checkIn}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#757F8C'}}>Price</Text>
          {count > 0 ? (
            <Text style={{color: '#757F8C'}}>
              {(Math.floor((time / 3600000) % 60) + 1) * pricePerH}฿
            </Text>
          ) : (
            <Text style={{color: '#757F8C'}}>0฿</Text>
          )}
        </View>
      </View>
      <View
        style={{width: '90%', justifyContent: 'center', alignSelf: 'center'}}>
        <TouchableOpacity onPress={buttonHandler} style={{marginBottom: 100}}>
          <View
            style={{
              backgroundColor: pressed ? '#BD5757' : '#5EAC7A',
              borderRadius: 10,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.buttonText}>
              {pressed ? 'Check-Out' : 'Check-In'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ParkingCar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f4f7',
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  HeadText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    height: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  Timer: {
    fontSize: 50,
  },
});
