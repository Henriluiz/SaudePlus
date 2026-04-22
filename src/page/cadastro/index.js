import React, { use, useState } from "react";
import {Text,View,Image,Pressable, Alert, TextInput}from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

import * as ImagePicker from "expo-image-picker";
export default function CadastroFoto() {
  const navigation = useNavigation();

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState(""); // usa picker para Isso
  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [tipoSanguineo, setTipoSanguineo] = useState("");

  // Um erro diferente para cada, para se exibido em baixo de seus inputs correspondente
  const [erroNome, setErroNome] = useState("");
  const [erroData, setErroData] = useState("");
  const [errogenero, setErroGenero] = useState("");
  const [erroPeso, setErroPeso] = useState("");
  const [erroAltura, setErroAltura] = useState("");
  const [erroTipoSan, setErroTipoSan] = useState("");


  async function validarCampos() {
    if (!nomeCompleto.trim()) {
      setErroNome("Digite seu nome completo.");
      return false;
    }
    setErroNome("");
    
    if (dataNascimento.length !== 10) {
      setErroData("Digite uma data válida.");
      return false;
    }
    setErroData("");

    if (!genero) {
      setErroGenero("Selecione um gênero.");
      return false;
    }
    setErroGenero("");
    return true;
  }

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.containerImg}>
              <Image
              style={styles.logo}/>
          </View>
        </View>
        <View style={styles.container2}>
            <Text style={styles.titulo}>Cadastro</Text>
            <View style={styles.contInput}>
              {/* <Text style={styles.label}>Nome Completo</Text> */}
              <TextInput
                style={styles.input}
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
                placeholder="Nome Completo"
              />
              {/* <Text style={styles.label}>Nome Completo</Text> */}
              <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={setDataNascimento}
                placeholder="Nome Completo"
              />
              {/* <Text style={styles.label}>Nome Completo</Text> */}
              <TextInput
                style={styles.input}
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
                placeholder="Nome Completo"
              />
              {/* <Text style={styles.label}>Nome Completo</Text> */}
              <TextInput
                style={styles.input}
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
                placeholder="Nome Completo"
              />
            </View>
            
        </View>
      </View>
    );
}

