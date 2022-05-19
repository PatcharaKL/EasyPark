import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";

export default function History({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          History
        </Text>
      </View>
      <View style={{ padding: 35, paddingBottom: 10, paddingTop: 15 }}>
        <Text style={{ color: "#888888", fontSize: 18, fontWeight: "bold" }}>
          Active Session
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ height: 100, paddingLeft: 15 }}>
          <View
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 10,
                height: 100,
                width: 380,
                paddingTop: 10,
              },
              styles.button,
            ]}
          >
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#888888",
                  borderBottomWidth: 1,
                  paddingTop: 1,
                }}
              >
                <View style={{ paddingLeft: 10 }}>
                  <Button color="#FF6633" title="30 Baht/Hr" />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    paddingLeft: 135,
                    paddingBottom: 10,
                  }}
                >
                  <Text style={{ color: "#000", fontSize: 15 }}>
                    Central ladprao
                  </Text>
                  <Text style={{ color: "#888888", fontSize: 15 }}>
                    normal space C4
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
              <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>
                  06/09/2023
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 70 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>12:21pm</Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 20 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>30Baht</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      
      <View
        style={{
          padding: 35,
          flexDirection: "row",
          paddingBottom: 10,
          paddingTop: 20,
        }}
      >
        <Text style={{ color: "#888888", fontSize: 18, fontWeight: "bold" }}>
          Completed Sessions
        </Text>
        <Text
          style={{
            color: "#FF6633",
            fontSize: 18,
            fontWeight: "bold",
            paddingHorizontal: 110,
          }}
        >
          View all
        </Text>
      </View>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <TouchableOpacity style={{ height: 100, paddingLeft: 15 }}>
          <View
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 10,
                height: 100,
                width: 380,
                paddingTop: 10,
              },
              styles.button,
            ]}
          >
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#888888",
                  borderBottomWidth: 1,
                }}
              >
                <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
                  <Image
                    source={require("../assets/check-mark-button.png")}
                    style={styles.image}
                  />
                </View>
                <View style={{ flexDirection: "column", paddingLeft: 200,
                    paddingBottom: 10 }}>
                  <Text style={{ color: "#000", fontSize: 15 }}>
                    Central ladprao
                  </Text>
                  <Text style={{ color: "#888888", fontSize: 15 }}>
                    normal space A1
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
              <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>
                  02/09/2023
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 70 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>02:00pm</Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 20 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>90Baht</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <TouchableOpacity style={{ height: 100, paddingLeft: 15 }}>
          <View
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 10,
                height: 100,
                width: 380,
                paddingTop: 10,
              },
              styles.button,
            ]}
          >
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#888888",
                  borderBottomWidth: 1,
                }}
              >
                <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
                  <Image
                    source={require("../assets/check-mark-button.png")}
                    style={styles.image}
                  />
                </View>
                <View style={{ flexDirection: "column", paddingLeft: 200,
                    paddingBottom: 10 }}>
                  <Text style={{ color: "#000", fontSize: 15 }}>
                    Central ladprao
                  </Text>
                  <Text style={{ color: "#888888", fontSize: 15 }}>
                    normal space C8
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
              <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>
                  03/09/2023
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 70 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>04:00pm</Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 20 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>30Baht</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <TouchableOpacity style={{ height: 100, paddingLeft: 15 }}>
          <View
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 10,
                height: 100,
                width: 380,
                paddingTop: 10,
              },
              styles.button,
            ]}
          >
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#888888",
                  borderBottomWidth: 1,
                }}
              >
                <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
                  <Image
                    source={require("../assets/check-mark-button.png")}
                    style={styles.image}
                  />
                </View>
                <View style={{ flexDirection: "column", paddingLeft: 200,
                    paddingBottom: 10 }}>
                  <Text style={{ color: "#000", fontSize: 15 }}>
                    Central ladprao
                  </Text>
                  <Text style={{ color: "#888888", fontSize: 15 }}>
                    normal space B3
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
              <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>
                  04/09/2023
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 70 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>06:00pm</Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 20 }}>
                <Text style={{ color: "#888888", fontSize: 15 }}>60Baht</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ height: 100, paddingLeft: 15, paddingTop: 10 }}
      >
        <View
          style={[
            {
              backgroundColor: "#FF6633",
              borderRadius: 10,
              height: 50,
              width: 380,
              alignItems: "center",
              justifyContent: "center",
            },
            styles.button,
          ]}
        >
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
            Home Menu
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 25,
    flex: 1,
  },
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});
