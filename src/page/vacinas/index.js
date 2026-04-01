import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Vacinas() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* HEADER BONITO */}
      <LinearGradient
        colors={["#1B5E5A", "#4CA6A8"]}
        style={styles.header}
      >
        <Ionicons 
          name="arrow-back" 
          size={24} 
          color="#fff"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Vacinas</Text>
        <Ionicons name="medical-outline" size={24} color="#fff" />
      </LinearGradient>

      {/* CARDS */}
      <View style={styles.cardsContainer}>
        
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed
          ]}
          onPress={() =>
            navigation.navigate("VacinasLista", { tipo: "crianca" })
          }
        >
          <MaterialCommunityIcons name="baby-face-outline" size={35} color="#2F7F7B" />
          <Text style={styles.cardText}>Criança</Text>
          <Text style={styles.cardSub}>Até 19 anos</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed
          ]}
          onPress={() =>
            navigation.navigate("VacinasLista", { tipo: "adulto" })
          }
        >
          <MaterialCommunityIcons name="account" size={35} color="#2F7F7B" />
          <Text style={styles.cardText}>Adulto</Text>
          <Text style={styles.cardSub}>Idoso</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed
          ]}
          onPress={() =>
            navigation.navigate("VacinasLista", { tipo: "gestante" })
          }
        >
          <MaterialCommunityIcons name="mother-nurse" size={35} color="#2F7F7B" />
          <Text style={styles.cardText}>Gestante</Text>
          <Text style={styles.cardSub}>Período</Text>
        </Pressable>

      </View>
    </View>
  );
}