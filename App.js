import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Glicemia from "./src/page/glicemia";
import Home from "./src/page/home";
import Movements from "./src/components/Movements";

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="glicemia" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="glicemia"
          component={Glicemia}
        />
        <Stack.Screen
          name="home"
          component={Home}
        />
        <Stack.Screen 
          name="movements"
          component={Movements}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    padding: 8,
  },
  buttonText: {
    color: "#8D6E63",
    fontSize: 35,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#56CCF2",
    borderRadius: 10,
    padding: 20,
    width: 250,
    alignItems: "center",
    elevation: 20,
  },
  menuText: {
    color: "#8D6E63",
    fontSize: 35,
    marginBottom: 10,
    fontFamily: 'Fredoka_600SemiBold',
    paddingVertical: 9,
  },
  modalText: {
    color: "#8D6E63",
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'Fredoka_600SemiBold',
    paddingVertical: 9,
    textAlign: "center",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#8D6E63",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    backgroundColor: "#F2C94C",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  closeButton: {
    backgroundColor: "#F2C94C",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 15,
    elevation: 5,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#8D6E63",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: 'Fredoka_600SemiBold',
    fontSize: 18,
  },
  closeButtonText: {
    color: "#8D6E63",
    fontWeight: "bold",
  },
});