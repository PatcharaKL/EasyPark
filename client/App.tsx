import React, {useState, ReactNode} from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import SelectType from './pages/SelectType';
import SelectFloor from './pages/SelectFloor';
import ParkingCar from './pages/ParkingCar';
import PinInput from './pages/PinInput';
import Menu from './pages/Menu';
import History from './pages/History';
import Profile from './pages/Profile';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {userContext} from './context/userContext';

const Stack = createStackNavigator();
const App: () => ReactNode = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <userContext.Provider value={{user, setUser}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Log In"
            component={Login}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="History"
            component={History}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="SelectType"
            component={SelectType}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="SelectFloor"
            component={SelectFloor}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="Parking"
            component={ParkingCar}
            options={{header: () => null}}></Stack.Screen>
          <Stack.Screen
            name="PIN"
            component={PinInput}
            options={{header: () => null}}></Stack.Screen>
        </Stack.Navigator>
      </userContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
