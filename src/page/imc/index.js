import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function IMC() {
  const navigation = useNavigation();

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [fadeAnim] = useState(new Animated.Value(0));

  const alturaNum = parseFloat(altura);
  const pesoNum = parseFloat(peso);

  const imc =
    alturaNum && pesoNum
      ? (pesoNum / (alturaNum * alturaNum)).toFixed(2)
      : null;

  const tabela = [
    { label: "Menor que 16", nome: "Magreza Grave" },
    { label: "16 a 16,9", nome: "Magreza Moderada" },
    { label: "17 a 18,4", nome: "Magreza Leve" },
    { label: "18,5 a 24,9", nome: "Saudável" },
    { label: "25 a 29,9", nome: "Sobrepeso" },
    { label: "30 a 34,9", nome: "Obesidade I" },
    { label: "Acima de 35", nome: "Obesidade II" },
  ];

  function getFaixa(imc) {
    if (imc < 16) return 0;
    if (imc < 17) return 1;
    if (imc < 18.5) return 2;
    if (imc < 25) return 3;
    if (imc < 30) return 4;
    if (imc < 35) return 5;
    return 6;
  }

  React.useEffect(() => {
    if (imc) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [imc]);

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <LinearGradient colors={["#1B5E5A", "#4CA6A8"]} style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>IMC</Text>
        <Ionicons name="speedometer" size={24} color="#fff" />
      </LinearGradient>

      <ScrollView contentContainerStyle={{ padding: 15 }}>

        {/* INPUTS */}
        <View style={styles.box}>
          <TextInput
            placeholder="Altura (ex: 1.72)"
            value={altura}
            onChangeText={setAltura}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Peso (kg)"
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </ScrollView>
        {/* RESULTADO + ANIMAÇÃO */}
        {imc && (
          <Animated.View style={{ opacity: fadeAnim }}>
            
            {/* "GRÁFICO" SIMPLES */}
            <View style={styles.grafico}>
              <Text style={styles.imcValue}>{imc}</Text>
              <Text style={styles.imcLabel}>IMC</Text>
            </View>

            {/* TABELA COM DESTAQUE */}
            <View style={styles.table}>
              {tabela.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.rowTable,
                    index === getFaixa(parseFloat(imc)) && styles.highlight
                  ]}
                >
                  <Text style={styles.cell}>{item.label}</Text>
                  <Text style={styles.cell}>{item.nome}</Text>
                </View>
              ))}
            </View>

            {/* PESO IDEAL */}
            <View style={styles.idealBox}>
              <Text style={styles.idealText}>
                Seu peso ideal é {(alturaNum * alturaNum * 22).toFixed(1)} kg
              </Text>
            </View>

          </Animated.View>
        )}
      
    </View>
  );
}