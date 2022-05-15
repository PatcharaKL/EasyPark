import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

const ParkingCar = ({navigation, route}) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [price, setPrice] = useState(0);
  const {type, floor, pricePerH} = route.params;
  const [count, setCount] = useState(0);

  const priceCalculate = () => {
    setPrice(pricePerH);
  }

  const buttonHandler = () => {
    setCount(count + 1);
    setPressed(!pressed);
    setTimerOn(!timerOn);
    if(count >= 1){
      navigation.navigate('PIN');
      
    }
  }
  useEffect(() => {
    
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000 );
      }, 1000);
      // if((time / 60000 % 60) == 0){
      //   setPrice(price + pricePerH);
      // }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.HeadText, { alignSelf: "center", marginTop: 20 }]}>
          Parking
        </Text>
      </View>
      <View style={[{ alignSelf: "center" }]}>
        <Text style={[styles.Timer, { color: "#969696" }]}>
          {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
          <Text>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            <Text>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</Text>
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.section,
          {
            alignSelf: "center",
            paddingHorizontal: 20,
            paddingBottom: 10,
            justifyContent: "space-evenly",
          },
        ]}
      >
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "#3B414B",
            }}
          >
            Details
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#757F8C" }}>Check-In Time:</Text>
          <Text style={{ color: "#757F8C" }}>-</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#757F8C" }}>Space</Text>
          <Text style={{ color: "#757F8C" }}>{JSON.stringify(type + " " + floor)}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#757F8C" }}>Price</Text>
          <Text style={{ color: "#757F8C" }}>{((Math.floor((time / 3600000) % 60))) * pricePerH}฿</Text> 
        </View>
      </View>
      <View
        style={{ width: "90%", justifyContent: "center", alignSelf: "center" }}
      >
        <TouchableOpacity
          onPress={buttonHandler}
        >
          <View
            style={{
              backgroundColor: pressed ? "#BD5757" : "#5EAC7A",
              borderRadius: 10,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 150,
            }}
          >
            <Text style={styles.buttonText}>
              {pressed ? "Check-Out" : "Check-In"}
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
    backgroundColor: "#f5f4f7",
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  HeadText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    height: 180,
    shadowColor: "#000",
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
