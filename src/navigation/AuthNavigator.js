import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../page/login";
import Cadastro from "../page/cadastro";
import { StackScreen } from "react-native-screens";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}