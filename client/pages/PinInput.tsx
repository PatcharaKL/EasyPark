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


const PinInput = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={[{marginTop: 10}, styles.Header]}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          HELLO, It's will be the pin page soon :D
        </Text>
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
});
