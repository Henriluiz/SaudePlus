import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Cadastro({route}) {
  const navigation = useNavigation();

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [genero, setGenero] = useState("");
  
  const [erroNome, setErroNome] = useState("");
  const [erroData, setErroData] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroGenero, setErroGenero] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState("");
  const [erroPeso, setErroPeso] = useState("");
  const [erroAltura, setErroAltura] = useState("");

  function formatarData(texto) {
    let cleaned = texto.replace(/\D/g, "");

    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    if (cleaned.length > 4) {
      return cleaned.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
    } else if (cleaned.length > 2) {
      return cleaned.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }

    return cleaned;
  }

  function formatDateBRToISO(dateBR) {
    if (!dateBR) return '';
  
    const [day, month, year] = dateBR.split('/');
  
    // Validação simples
    if (!day || !month || !year) {
      throw new Error('Data inválida. Use o formato dd/mm/aaaa');
    }
  
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  function validarCampos() {
    let valido = true;

    if (!nomeCompleto.trim()) {
      setErroNome("Digite seu nome completo.");
      valido = false;
    } else setErroNome("");

    if (dataNascimento.length !== 10) {
      setErroData("Data inválida.");
      valido = false;
    } else {
      const [dia, mes, ano] = dataNascimento.split("/").map(Number);
      if (
        dia < 1 || dia > 31 ||
        mes < 1 || mes > 12 ||
        ano < 1900 || ano > new Date().getFullYear()
      ) {
        setErroData("Data inválida.");
        valido = false;
      } else setErroData("");
    }
    setDataNascimento(formatDateBRToISO(dataNascimento));

    if (!genero) {
      setErroGenero("Selecione o gênero.");
      valido = false;
    } else setErroGenero("");

    
    const pesoNum = parseFloat(peso.replace(",", "."));
    if (!peso || isNaN(pesoNum) || pesoNum < 20 || pesoNum > 300) {
      setErroPeso("Peso inválido (20kg - 300kg)");
      valido = false;
    } else setErroPeso("");
    
    const alturaNum = parseFloat(altura);
    if (!altura || isNaN(alturaNum) || alturaNum < 100 || alturaNum > 250) {
      setErroAltura("Altura inválida (100cm - 250cm)");
      valido = false;
    } else setErroAltura("");
    
    if (!email.includes("@") || !email.includes(".")) {
      setErroEmail("Email inválido.");
      valido = false;
    } else setErroEmail("");

    if (senha.length < 6) {
      setErroSenha("Mínimo 6 caracteres.");
      valido = false;
    } else setErroSenha("");

    if (!confirmarSenha) {
      setErroConfirmarSenha("Confirme sua senha.");
      valido = false;
    } else if (confirmarSenha !== senha) {
      setErroConfirmarSenha("As senhas não coincidem.");
      valido = false;
    } else setErroConfirmarSenha("");

    return valido;
  }

  function continuar() {

    const dataISO = formatDateBRToISO(dataNascimento);
    console.log(dataISO)


    if (validarCampos()) {
      navigation.navigate("cadastroFoto", {
        nomeCompleto,
        dataNascimento: dataISO,
        peso,
        altura,
        email,
        senha,
        genero
      });
    }
  }
  
  // useEffect(() => {

  //   async function load() {
  //     if (route.params) {
  //       const {nome, data, pesokg, alturacm, emailN, senhaAntiga, generoN} = route.params;
  //       setNomeCompleto(nome || "")
  //       setDataNascimento(data || "")
  //       setEmail(emailN || "")
  //       setSenha(senhaAntiga || "")
  //       setPeso(pesokg || "")
  //       setAltura(alturacm || "")
  //       setGenero(generoN || "")
  //     }

  //   }

  //   load();

  // }, [route.params]);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        
        {/* TOPO VERDE */}
        <View style={styles.containerImg}>
          <Image style={styles.logo} source={require('../../../assets/saudemais_logo_white_text.svg')}/>
        </View>

        {/* PARTE BRANCA */}
        <View style={styles.container2}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.titulo}>Crie sua conta</Text>

            <View style={styles.contInput}>

              <TextInput
                style={styles.input}
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
                placeholder="Nome completo"
                placeholderTextColor="#999"
              />
              {erroNome ? <Text style={styles.erro}>{erroNome}</Text> : null}
                
              <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={(text) => setDataNascimento(formatarData(text))}
                placeholder="Data de nascimento (dd/mm/aaaa)"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              {erroData ? <Text style={styles.erro}>{erroData}</Text> : null}

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={genero}
                  onValueChange={(itemValue) => setGenero(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Selecione o gênero" value="" />
                  <Picker.Item label="Masculino" value="MASCULINO" />
                  <Picker.Item label="Feminino" value="FEMININO" />
                  <Picker.Item label="Outro" value="OUTRO" />
                  <Picker.Item label="Prefiro não informar" value="PREFIRO_NAO_INFORMAR" />
                </Picker>
              </View>

              {erroGenero ? <Text style={styles.erro}>{erroGenero}</Text> : null}

              <TextInput
                style={styles.input}
                value={peso}
                onChangeText={setPeso}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              {erroPeso ? <Text style={styles.erro}>{erroPeso}</Text> : null}

              <TextInput
                style={styles.input}
                value={altura}
                onChangeText={setAltura}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              {erroAltura ? <Text style={styles.erro}>{erroAltura}</Text> : null}

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#999"
              />
              {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

              <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor="#999"
              />
              {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

              <TextInput
                style={styles.input}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                placeholder="Confirmar senha"
                secureTextEntry
                placeholderTextColor="#999"
              />
              {erroConfirmarSenha ? (
                <Text style={styles.erro}>{erroConfirmarSenha}</Text>
              ) : null}



              <View style={styles.containerBotoes}>
                <Pressable
                  onPress={() => navigation.navigate("login")}
                  style={[styles.botao, styles.botaoSecundario]}
                >
                  <Text style={[styles.textoBotao, styles.textoSecundario]}>
                    Voltar
                  </Text>
                </Pressable>

                <Pressable onPress={continuar} style={styles.botao}>
                  <Text style={styles.textoBotao}>Continuar</Text>
                </Pressable>
              </View>

            </View>
          </ScrollView>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}