import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ImageBackground,TextInput, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Movements from '../../components/Movements'; // ajusta o caminho


export default function Glicemia() {
  const navigation = useNavigation();

  const [glicemia, setGlicemia] = useState('');
  const [list, setList] = useState([]);
  
    const recuperarDados = async () => {
        try {
        const obj = await AsyncStorage.getItem("@glicemias");
        if (obj !== null) {
            const valores = JSON.parse(obj)
            return {valores}
        } else 
        {
            return {valores: []}
        }
        } catch (error) {
        console.log("Erro ao carregar", error);
        }
    };


    const addItem = async (newDado) => {
        const prev = await recuperarDados();

        const dados = [...(prev?.valores ?? []), newDado];
        dados.sort((a, b) => b.date - a.date);

        await AsyncStorage.setItem("@glicemias", JSON.stringify(dados)); // Salvo

        console.log("Salvo com sucesso");
    };

    const addList = async() => {
        try {
            if (!glicemia.trim()) {
                return;    
            }} catch (erro) {
                return erro;
            }
        
        const dataCompleta = new Date().toISOString();
        
        // const data = new Date(item.date).toLocaleDateString('pt-BR'); Extrair a data
        // const hora = new Date(item.date).toLocaleTimeString('pt-BR'); Extrair a hora
        // <Text>Data: {new Date(item.date).toLocaleDateString('pt-BR')}</Text>
        // <Text>Hora: {new Date(item.date).toLocaleTimeString('pt-BR')}</Text>
        
        
        const newDado = {
        id: Date.now().toString(), // ID único
        value: glicemia,
        date: dataCompleta, // timestamp,
        };

        
        setList(prev => {
            const nova = [...prev, newDado];

            return nova.sort((a, b) => b.date - a.date);
        }); // Isso, muda o array por completo, assim o flatlist vai detectar e reiniciar
        // e ordena!q

        await addItem(newDado); 
    };

    useEffect(() => {
    const carregar = async () => {
        const antigoStatus = await recuperarDados();

        if (!antigoStatus) return;

        if (antigoStatus.valores?.length > 0) {
            setList(antigoStatus.valores);
        }
    };

    carregar();
    }, []);

  return (
    <View style={styles.container}>
        {/* Entrada */}
        <View style={styles.containerEntrada}>
            <Text style={styles.titulo}>Registre a glicemia</Text>
            <View>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="Valor (em mg/dl)"
                    placeholderTextColor="#C1E8FF"
                    keyboardType="numeric"
                    value={glicemia}
                    onChangeText={setGlicemia}
                    />
                </View>
                <Pressable style={styles.salvar} onPress={addList}>
                    <Text>Salvar</Text>
                </Pressable>
            </View>
        </View>
        {/* Histórico */}
        <View style={styles.containerHistorico}>
            <Text>Histórico</Text>
            <FlatList
            style={styles.list}
            contentContainerStyle={{ gap: 3, paddingBottom: 20 }}
            data={list}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
        <Text>Glicemia</Text>
        <StatusBar style="auto" />
    </View>
  );
}