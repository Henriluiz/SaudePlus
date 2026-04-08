import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../page/home";
import Glicemia from "../page/glicemia";
import Nutriente from "../page/nutriente";
import IMC from "../page/imc";
import Agua from "../page/agua";
import Vacinas from "../page/vacinas";
import VacinasLista from "../page/vacinasLista";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Glicemia" component={Glicemia} />
      <Stack.Screen name="Nutriente" component={Nutriente} />
      <Stack.Screen name="IMC" component={IMC} />
      <Stack.Screen name="Agua" component={Agua} />
      <Stack.Screen name="Vacinas" component={Vacinas} />
      <Stack.Screen name="VacinasLista" component={VacinasLista} />
    </Stack.Navigator>
  );
}