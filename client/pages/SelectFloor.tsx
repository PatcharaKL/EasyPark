import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

const SelectFloor = ({navigation, route}) => {
  const [floors, setFloors] = useState([]);
  const [selected, setSelected] = useState(false);
  const {passType, typeID, price} = route.params;
  const continuePressHandler = floor => {
    setSelected(!selected);
    setFloors(floor.floor);
    console.log(floor.floor);
    navigation.navigate('Parking', {
      floor: floor.floor,
      type: passType,
      id: typeID,
      pricePerH: price,
    });
  };

  const loadData = async () => {
    const responseFloor = await axios.get(`http://192.168.1.39:5000/getFloor`, {
      params: {
        type: typeID,
      },
    });
    setFloors(responseFloor.data);
    // const responseSpace = await axios.get(`http://192.168.1.39:5000/getFloor`,{
    //   params: {
    //     type: typeID,
    //     //floor: floors,
    //   }
    // });
    // setFreeSpace(responseSpace.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
