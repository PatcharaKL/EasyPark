import axios, { Axios } from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {userContext} from '../context/userContext';

export default function History() {
  const [data, setData] = useState([]);
  const {user, setUser} = useContext(userContext);
  const [isDel, setIsDel] = useState(false);
  useEffect(() => {
    loadData();
  }, [isDel]);
  const loadData = async () => {
    const res = await axios.get('http://192.168.1.39:5000/GetHistory', {
      params: {
        cusID: user[0].userID,
      },
    });
    setData(res.data);
  };
  const onPressHandler = () => {
    Alert.alert(
      "Delete",
      "Are you sure want to delete all the history?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: deleteHistory }
      ]
    );
  }
  const deleteHistory = async () => {
    console.log('Im here')
    const res = await axios.delete('http://192.168.1.39:5000/deleteHistory',{
      data:{
        cusID: user[0].userID,
      }
    })
    .catch(err => console.log(err))
    setIsDel(!isDel);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        History
      </Text>
      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 10,
            paddingTop: 20,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#888888', fontSize: 18, fontWeight: 'bold'}}>
            Completed Sessions
          </Text>
          <TouchableOpacity onPress={onPressHandler}>
            <Text
              style={{
                color: '#FF6633',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row', paddingBottom: 10}}>
                <View style={{height: 100}}>
                  <View
                    style={[
                      {
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        height: 100,
                        width: 380,
                        paddingTop: 10,
                      },
                      styles.button,
                    ]}>
                    <View style={{paddingLeft: 10, paddingRight: 10}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderBottomColor: '#888888',
                          borderBottomWidth: 1,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <View
                            style={{
                              paddingLeft: 10,
                              paddingBottom: 5,
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={require('../assets/check-mark-button.png')}
                              style={styles.image}
                            />
                          </View>
                          <View
                            style={{
                              flexDirection: 'column',
                              paddingBottom: 10,
                              alignItems: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: '#000',
                                fontSize: 15,
                                fontWeight: '500',
                              }}>
                              {item.Bname}
                            </Text>
                            <Text style={{color: '#888888', fontSize: 15}}>
                              {item.name} space {item.space_type_id}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingVertical: 5}}>
                      <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <Text style={{color: '#888888', fontSize: 15}}>
                          {item.check_in}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'column',
                          paddingHorizontal: 70,
                        }}></View>
                      <View
                        style={{
                          flexDirection: 'column',
                          paddingHorizontal: 20,
                        }}>
                        <Text style={{color: '#888888', fontSize: 15}}>
                          {item.total_price}Baht
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(i, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f4f7',
    paddingTop: 25,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 3,
  },
  image: {
    width: 30,
    height: 30,
  },
});
