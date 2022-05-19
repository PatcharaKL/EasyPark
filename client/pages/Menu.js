import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Menu({navigation}) {

  const goToProfile = () =>{
    navigation.navigate('Profile')
  }
  const goToParking = () =>{
    navigation.navigate('SelectType')
  }
  const goToHistory = () =>{
    navigation.navigate('History')
  }
  return (
    <View style={styles.container}>
      <View style= {{flexDirection:'row'}}>
      <TouchableOpacity onPress={goToProfile} style={{ marginBottom: 100, height: 100 }}>
        <View
          style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 150,
            width: 350,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 100,

          },styles.button]}
        >
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.image}
          />
          <Text style={{ color: "#000", fontSize: 20, fontWeight: 'bold'}}>
            Nunthawan Wongwaikhunanan
          </Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style= {{flexDirection: 'row'}}>
      <TouchableOpacity style={{ marginBottom: 100, height: 100,paddingHorizontal:15 }}>
        <View
          style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 160,
            width: 160,
            alignItems: "center",
            justifyContent: "center",

          },styles.button]}
        >
          <Image
            source={require("../assets/CreditCard.png")}
            style={styles.image}
          />
          <Text style={{ color: "#000", fontSize: 15,}}>
          Paying methods
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToParking} style={{ marginBottom: 100, height: 100,paddingHorizontal:15 }}>
        <View
          style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 160,
            width: 160,
            alignItems: "center",
            justifyContent: "center",

          },styles.button]}
        >
          <Image
            source={require("../assets/Parking.png")}
            style={styles.image}
          />
          <Text style={{ color: "#000", fontSize: 15,}}>
          Parking
          </Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style= {{flexDirection: 'row'}}>
      <TouchableOpacity onPress={goToHistory} style={{ marginBottom: 100, height: 100,paddingHorizontal:15 }}>
        <View
          style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 160,
            width: 160,
            alignItems: "center",
            justifyContent: "center",

          },styles.button]}
        >
          <Image
            source={require("../assets/History.png")}
            style={styles.image}
          />
          <Text style={{ color: "#000", fontSize: 15,}}>
          Parking History
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Log In');
      }} style={{ marginBottom: 100, height: 100,paddingHorizontal:15 }}>
        <View
          style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 160,
            width: 160,
            alignItems: "center",
            justifyContent: "center",

          },styles.button]}
        >
          <Image
            source={require("../assets/log_out.png")}
            style={styles.image}
          />
          <Text style={{ color: "#000", fontSize: 15,}}>
          Logout
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f87444",
    paddingTop:50,
    alignItems:"center"
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    alignItems: "center",
  },
  button: {
    
    backgroundColor:'#dddd'
   
  },
});
