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
  Modal,
  Image,
} from 'react-native';
import axios from 'axios';
import {userContext} from '../context/userContext';
userContext;
const SelectFloor = ({navigation, route}) => {
  const [floors, setFloors] = useState([]);
  const [selected, setSelected] = useState(false);
  const [showSpace, setShowSpace] = useState(false);
  const {passType, typeID, price} = route.params;
  const [availSpace, setAvailSpace] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState();
  const {user} = useContext(userContext);
  const continuePressHandler = async floor => {
    setSelected(!selected);
    setSelectedFloor(floor.floor);
    const responseSpace = await axios
      .get(`http://192.168.1.39:5000/getAFreeSpace`, {
        params: {
          typeID: typeID,
          inFloor: floor.floor,
        },
      })
      .then(d => {
        setAvailSpace(d.data);
        return d;
      })
      .then( async (d) => {
        const response = await axios
          .put('http://192.168.1.39:5000/updateSpaceAvailablelity', {
            spaceID: d.data[0].space_id,
            available: 'N',
          })
          .then(r => console.log(r.data));
        return d;
      })
      .then(d => {
        setShowSpace(true);
        console.log('send', availSpace);
        const timer = setTimeout(() => {
          setShowSpace(false);
          navigation.navigate('Parking', {
            floor: floor.floor,
            type: passType,
            space: d.data,
            typeID: typeID,
            pricePerH: price,
          });
          clearTimeout(timer);
        }, 4000);
      })
      .catch(err => console.log(err));
  };
  const loadData = async () => {
    const responseFloor = await axios.get(`http://192.168.1.39:5000/getFloor`, {
      params: {
        type: typeID,
      },
    });
    setFloors(responseFloor.data);
  };

  useEffect(() => {
    console.log(user);
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={showSpace} transparent>
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
              Space Successfully Booked
            </Text>
            <Text style={{fontWeight: '500', fontSize: 15, color: '#A6AAB4'}}>
              Your are place at
            </Text>
            {availSpace.map(index => (
              <Text key={0} style={{fontWeight: 'bold', fontSize: 40}}>
                {index.space_id}
              </Text>
            ))}
            <Text style={{fontWeight: '500', fontSize: 13}}>
              (Floor {selectedFloor})
            </Text>
          </View>
        </View>
      </Modal>
      <View style={[{marginTop: 10}, styles.Header]}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Select a floor</Text>
      </View>
      <View style={styles.section}>
        <FlatList
          data={floors}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={continuePressHandler.bind(this, item)}
              style={[
                {flex: 1, backgroundColor: selected ? '#ddd' : '#f87444'},
                styles.button,
              ]}>
              <Text style={styles.text}>{item.floor}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(i, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default SelectFloor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'column',
    backgroundColor: '#f5f4f7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
});
