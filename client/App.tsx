 import React, { useState, ReactNode } from "react";
 import Login from "./pages/Login";
 import Register from "./pages/Register";
 import SelectType from "./pages/SelectType";
 import SelectFloor from "./pages/SelectFloor";
 import ParkingCar from "./pages/ParkingCar";
 import PinInput from "./pages/pinInput";
 import "react-native-gesture-handler";
 import { StyleSheet } from "react-native";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={Login} options={{header: () => null}}></Stack.Screen>
        <Stack.Screen name="Register" component={Register} options={{header: () => null}}></Stack.Screen>
        <Stack.Screen name="SelectType" component={SelectType} options={{header: () => null}}></Stack.Screen>
        <Stack.Screen
          name="SelectFloor"
          component={SelectFloor}
          options={{header: () => null}}
        ></Stack.Screen>
        <Stack.Screen name="Parking" component={ParkingCar} options={{header: () => null}}></Stack.Screen>
        <Stack.Screen name="PIN" component={PinInput} options={{header: () => null}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
