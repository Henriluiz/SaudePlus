import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function VacinasLista({ route }) {
  const navigation = useNavigation();

  const tipo = route?.params?.tipo || "crianca";
  const [aberto, setAberto] = useState(null);

  const dados = {
    crianca: [
      { titulo: "Ao Nascer", vacinas: ["BCG-id", "Hepatite B (1ª dose)"] },
      { titulo: "2 Meses", vacinas: ["Pentavalente", "Poliomielite", "Rotavírus"] },
      { titulo: "4 Meses", vacinas: ["Pentavalente", "Poliomielite"] },
      { titulo: "6 Meses", vacinas: ["Pentavalente", "Influenza"] },
      { titulo: "12 Meses", vacinas: ["Tríplice Viral"] },
      { titulo: "15 Meses", vacinas: ["DTP", "Hepatite A"] },
      { titulo: "4 Anos", vacinas: ["DTP reforço"] },
      { titulo: "9 a 14 Anos", vacinas: ["HPV"] },
    ],

    adulto: [
      { titulo: "Adultos", vacinas: ["Hepatite B", "dT (tétano e difteria)"] },
    ],

    gestante: [
      { titulo: "Gestação", vacinas: ["dTpa", "Influenza", "Hepatite B"] },
    ],
  };

  const lista = dados[tipo] || [];

  return (
    <View style={styles.container}>
      
      {/* 🔥 HEADER IGUAL AO PRIMEIRO */}
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

      {/* LISTA */}
      <ScrollView 
        style={{ paddingHorizontal: 15, marginTop: 10 }} 
        showsVerticalScrollIndicator={false}
      >
        {lista.map((item, index) => {
          const abertoAtual = aberto === index;

          return (
            <View key={index} style={styles.section}>
              
              <Pressable
                style={styles.sectionHeader}
                onPress={() => setAberto(abertoAtual ? null : index)}
              >
                <View style={styles.leftHeader}>
                  <MaterialCommunityIcons name="needle" size={20} color="#2F7F7B" />
                  <Text style={styles.sectionTitle}>{item.titulo}</Text>
                </View>

                <MaterialCommunityIcons
                  name={abertoAtual ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#2F7F7B"
                />
              </Pressable>

              {abertoAtual && (
                <View style={styles.vacinasContainer}>
                  {item.vacinas.map((vacina, i) => (
                    <View key={i} style={styles.item}>
                      <MaterialCommunityIcons
                        name="check-circle-outline"
                        size={18}
                        color="#4CAF50"
                      />
                      <Text style={styles.itemText}>{vacina}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}