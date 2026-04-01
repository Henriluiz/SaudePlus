import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/page/home";
import Glicemia from "./src/page/glicemia";
import Vacinas from "./src/page/vacinas";
import VacinasLista from "./src/page/vacinasLista";
import IMC from "./src/page/imc";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Glicemia" component={Glicemia} />
        <Stack.Screen name="Vacinas" component={Vacinas} />
        <Stack.Screen name="VacinasLista" component={VacinasLista} />
        <Stack.Screen name="IMC" component={IMC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}