import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView, ActivityIndicator 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function validarCampos() {
    let valido = true;

    if (!email.includes("@") || !email.includes(".")) {
      setErroEmail("Email inválido");
      valido = false;
    } else setErroEmail("");

    if (senha.length < 6) {
      setErroSenha("Mínimo 6 caracteres");
      valido = false;
    } else setErroSenha("");

    return valido;
  }

  const entrar = async() =>  {
    setLoading(true)
    if (validarCampos()) {
      
      try {
        response = await signIn(email, senha)
        console.log(response);
      } catch (e){}
      
    }
    setLoading(false)

  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* PARTE VERDE (topo) */}
        <View style={styles.containerImg}>
          <Image style={styles.logo} />
        </View>

        {/* PARTE BRANCA */}
        <View style={styles.container2}>
          <Text style={styles.titulo}>Bem-vindo</Text>
          <Text style={styles.subtitulo}>Entre na sua conta</Text>

          <View style={styles.contInput}>

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

            <Pressable
              style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado
              ]}
              onPress={entrar}
            >
              {loading ? 
              (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text style={styles.textoBotao}>Entrar</Text>
              )
              }
            </Pressable>

            <Pressable onPress={() => navigation.navigate("cadastro")}>
              <Text style={styles.linkCadastro}>
                Não tem conta? <Text style={styles.linkDestaque}>Criar</Text>
              </Text>
            </Pressable>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}