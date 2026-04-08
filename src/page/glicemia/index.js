import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, FlatList, Dimensions, ScrollView, Keyboard  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Movements from '../../components/Movements';

const screenWidth = Dimensions.get("window").width;

export default function Glicemia() {

  const navigation = useNavigation();

  const [glicemia, setGlicemia] = useState('');
  const [list, setList] = useState([]);

  const recuperarDados = async () => {
    const obj = await AsyncStorage.getItem("@glicemias");
    return obj ? { valores: JSON.parse(obj) } : { valores: [] };
  };

  const addItem = async (newDado) => {
    const prev = await recuperarDados();
    const dados = [...(prev?.valores ?? []), newDado];
    dados.sort((a, b) => new Date(b.date) - new Date(a.date));
    await AsyncStorage.setItem("@glicemias", JSON.stringify(dados));
  };

  const addList = async () => {
    if (!glicemia.trim()) return;

    const newDado = {
      id: Date.now().toString(),
      value: glicemia,
      date: new Date().toISOString(),
    };

    setList(prev => {
      const nova = [...prev, newDado];
      return nova.sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    await addItem(newDado);
    setGlicemia('');
  };

  useEffect(() => {
    const carregar = async () => {
      const antigo = await recuperarDados();
      if (antigo?.valores?.length > 0) {
        setList(antigo.valores);
      }
    };
    carregar();
  }, []);

  const chartData = {
    labels: list.slice(0, 5).map(item =>
      new Date(item.date).getDate().toString()
    ),
    datasets: [
      { data: list.slice(0, 5).map(item => Number(item.value)) },
    ],
  };
  
  return (
    <View style={styles.container}>

      {/* 🔥 HEADER COM BOTÃO VOLTAR */}
      <LinearGradient
        colors={["#1B5E5A", "#4CA6A8"]}
        style={styles.header}
      >
        <View style={styles.headerContent}>

          {/* BOTÃO VOLTAR */}
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
              marginRight: 10
            })}
          >
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </Pressable>

          {/* ÍCONE + TÍTULO */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="diabetes" size={28} color="#fff" />
            <Text style={[styles.title, { marginLeft: 10 }]}>
              Glicemia
            </Text>
          </View>

        </View>
      </LinearGradient>
      
      <View style={styles.content}>

        {/* INPUT */}
        <View style={styles.card}>
          <Text style={styles.titulo}>Registrar valor</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: 110 mg/dl"
            placeholderTextColor="#235347"
            keyboardType="numeric"
            value={glicemia}
            onChangeText={setGlicemia}
          />

          <Pressable
            style={({ pressed }) => [
              styles.botao,
              { transform: [{ scale: pressed ? 0.96 : 1 }] }
            ]}
            onPress={ () => {
              Keyboard.dismiss();
              addList()}}
          >
            <Text style={styles.botaoTexto}>Salvar</Text>
          </Pressable>
        </View>

        {/* GRÁFICO */}
        {list.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.titulo}>Últimas medições</Text>

            <LineChart
              data={chartData}
              width={screenWidth * 0.8}
              height={180}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: () => "#4CA6A8",
                labelColor: () => "#235347",
              }}
              style={{ borderRadius: 16 }}
            />
          </View>
        )}

        {/* HISTÓRICO */}
        <View style={styles.cardHistorico}>
          <Text style={styles.titulo}>Histórico</Text>

          <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Movements data={item} />}
          />
        </View>

      </View>

      <StatusBar style="light" />
    </View>
  );
}