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
      { titulo: "1 Mês", vacinas: ["Hepatite B (2ª dose)"] },
      {
        titulo: "2 Meses",
        vacinas: [
          "Pentavalente (1ª dose)",    // DTP + Hib + Hep B
          "VIP – Poliomielite inativada (1ª dose)",
          "Pneumocócica 10V (1ª dose)",
          "Rotavírus (1ª dose)",
          "Meningocócica C (1ª dose)",
        ],
      },
      {
        titulo: "4 Meses",
        vacinas: [
          "Pentavalente (2ª dose)",
          "VIP – Poliomielite inativada (2ª dose)",
          "Pneumocócica 10V (2ª dose)",
          "Rotavírus (2ª dose)",
          "Meningocócica C (2ª dose)",
        ],
      },
      {
        titulo: "6 Meses",
        vacinas: [
          "Pentavalente (3ª dose)",
          "VIP – Poliomielite inativada (3ª dose)",
          "Influenza (1ª dose)",
        ],
      },
      { titulo: "7 Meses", vacinas: ["Influenza (2ª dose – se 1ª vez)"] },
      {
        titulo: "9 Meses",
        vacinas: ["Febre Amarela (1ª dose)", "Meningocócica B (1ª dose)"],
      },
      {
        titulo: "12 Meses",
        vacinas: [
          "Tríplice Viral – SCR (1ª dose)",
          "Pneumocócica 10V (reforço)",
          "Meningocócica C (reforço)",
          "Meningocócica B (2ª dose)",
        ],
      },
      {
        titulo: "15 Meses",
        vacinas: [
          "DTP (1º reforço)",
          "VOP – Poliomielite oral (1º reforço)",
          "Hepatite A (dose única)",
          "Tetraviral – SCRV (2ª dose tríplice viral + varicela)",
        ],
      },
      {
        titulo: "4 Anos",
        vacinas: [
          "DTP (2º reforço)",
          "VOP – Poliomielite oral (2º reforço)",
          "Febre Amarela (2ª dose / reforço)",
          "Varicela (reforço – se não recebeu Tetraviral)",
        ],
      },
      {
        titulo: "10 a 19 Anos",
        vacinas: [
          "HPV (se não vacinado anteriormente)",
          "Meningocócica ACWY (reforço)",
          "dT – Difteria e Tétano (se esquema incompleto)",
          "Febre Amarela (conforme histórico)",
          "Hepatite B (se não vacinado)",
          "Tríplice Viral (se não vacinado)",
          "Influenza (anual)",
          "Dengue – Qdenga (10 a 14 anos)",
        ],
      },
    ],

    adulto: [
      {
        titulo: "Adultos (20 a 59 Anos)",
        vacinas: [
          "Hepatite B (3 doses – se não vacinado)",
          "dT – Difteria e Tétano (reforço a cada 10 anos)",
          "Tríplice Viral – SCR (até 29 anos: 2 doses; 30 a 59 anos: 1 dose)",
          "Febre Amarela (1 dose – conforme histórico e área de risco)",
          "Influenza (anual)",
          "Varicela (2 doses – se não vacinado e sem histórico da doença)",
        ],
      },
      {
        titulo: "Idosos (60 Anos ou mais)",
        vacinas: [
          "Influenza (anual)",
          "Pneumocócica 23V (dose única)",
          "dT – Difteria e Tétano (reforço a cada 10 anos)",
          "Febre Amarela (conforme histórico – avaliar indicação)",
          "Hepatite B (3 doses – se não vacinado)",
          "Tríplice Viral (1 dose – se não vacinado)",
          "Herpes-Zóster (recomendada pela SBIm – rede privada)",
        ],
      },
    ],

    gestante: [
      {
        titulo: "Gestação (qualquer trimestre)",
        vacinas: [
          "Influenza (1 dose – a cada gestação)",
          "Hepatite B (3 doses – se não vacinada)",
        ],
      },
      {
        titulo: "A partir da 20ª semana",
        vacinas: ["dTpa – Tríplice bacteriana acelular (a cada gestação)"],
      },
      {
        titulo: "Pós-parto (puérpera não vacinada)",
        vacinas: [
          "Tríplice Viral – SCR (se não vacinada)",
          "Varicela (se sem histórico de vacinação ou doença)",
        ],
      },
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