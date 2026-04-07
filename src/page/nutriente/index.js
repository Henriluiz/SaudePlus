import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, ActivityIndicator, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "./styles";

const API_KEY = "barsAk8G0XjBZdDbrlxKeWFQIWwbKMQ5LwWvsZEo";

export default function Nutriente() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(null)
  const [fruta, setFruta] = useState("")
  const [fruta2, setFruta2] = useState("")
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  const buscarNutri = async () => {
        setLoading(true);
        setErro("");
        setDados(null);
        if (!fruta.trim()){
            setLoading(false)
            return;
        }
        setFruta2(fruta)
        try {
            setErro("");
            const nomeFruta = await traduzir(fruta, "pt", "en")
            const busca = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${nomeFruta}&api_key=${API_KEY}`);
            
            const resultadoBusca = await busca.data;

            if (!resultadoBusca.foods || resultadoBusca.foods.length === 0) {
                setErro("Fruta não encontrada.");
                setLoading(false);
                return;
            }

            const alimento = resultadoBusca.foods[0];

            // 2 - Buscar detalhes completos
            const detalhe = await axios.get(
                `https://api.nal.usda.gov/fdc/v1/food/${alimento.fdcId}?api_key=${API_KEY}`
            );

            const resultadoDetalhe = await detalhe.data;

            const nutrientes = resultadoDetalhe.foodNutrients || [];

            const pegarNutriente = (nome) => {
                const item = nutrientes.find(
                (n) =>
                    n.nutrient?.name?.toLowerCase() === nome.toLowerCase()
                );
                return item ? `${item.amount} ${item.nutrient.unitName}` : "Não informado";
            };

            setDados({
                nome: resultadoDetalhe.description || fruta,
                calorias: pegarNutriente("Energy"),
                proteinas: pegarNutriente("Protein"),
                carboidratos: pegarNutriente("Carbohydrate, by difference"),
                fibras: pegarNutriente("Fiber, total dietary"),
                gorduras: pegarNutriente("Total lipid (fat)"),
                calcio: pegarNutriente("Calcium, Ca"),
                ferro: pegarNutriente("Iron, Fe"),
                potassio: pegarNutriente("Potassium, K"),
                vitaminaC: pegarNutriente("Vitamin C, total ascorbic acid"),
            });
        } catch (error) {
            setErro("Erro ao buscar informações.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    async function traduzir(texto, de = "pt", para = "en") {
        const resposta = await axios.get("https://api.mymemory.translated.net/get", {
            params: {
            q: texto,
            langpair: `${de}|${para}`,
            },
        });

        return resposta.data.responseData.translatedText;
    }

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <LinearGradient colors={["#1B5E5A", "#4CA6A8"]} style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Fruta</Text>
        <Ionicons name="speedometer" size={24} color="#fff" />
      </LinearGradient>

        {/* INPUTS */}
        <View style={styles.box}>
          <TextInput
            placeholder="Fruta"
            value={fruta}
            onChangeText={setFruta}
            keyboardType="default"
            style={styles.input}
          />
        </View>
        <Pressable
            onPress={() => buscarNutri()}
            style={{backgroundColor: "#FFF", padding: 15, alignItems: "center"}}
        >
            <Text style={{fontSize: 18, color: "#235347"}}>Buscar</Text>
        </Pressable>
        {/* RESULTADO + ANIMAÇÃO */}
        <View>
            {dados && (
                <View style={styles.card}>
                    <Text style={styles.nome}>{fruta2}</Text>

                    <Text style={styles.info}>🔥 Calorias: {dados.calorias}</Text>
                    <Text style={styles.info}>💪 Proteínas: {dados.proteinas}</Text>
                    <Text style={styles.info}>🍞 Carboidratos: {dados.carboidratos}</Text>
                    <Text style={styles.info}>🌾 Fibras: {dados.fibras}</Text>
                    <Text style={styles.info}>🥑 Gorduras: {dados.gorduras}</Text>
                    <Text style={styles.info}>🦴 Cálcio: {dados.calcio}</Text>
                    <Text style={styles.info}>🩸 Ferro: {dados.ferro}</Text>
                    <Text style={styles.info}>⚡ Potássio: {dados.potassio}</Text>
                    <Text style={styles.info}>🍊 Vitamina C: {dados.vitaminaC}</Text>
                </View>
            )}

            <View style={{marginTop: "50%"}}>
                {loading && <ActivityIndicator size="large" color="#2E7D32" />}

                {erro ? <Text style={styles.erro}>{erro}</Text> : null}
            </View>
        </View>
    </View>
  );
}