import React, { use, useState } from "react";
import {Text,View,Image,Pressable, Alert }from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

import * as ImagePicker from "expo-image-picker";
export default function CadastroFoto() {
  const navigation = useNavigation();

  const [imagem, setImagem] = useState(null);

  const solicitarPermissoes = async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    const galeria = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (camera.status !== 'granted' || galeria.status !== 'granted') {
      Alert.alert('Permissão negada', 'É necessário permitir acesso à câmera e galeria.');
      return false;
    }

    return true;
  };

  const tirarFoto = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Imcompátivel, mas funciona
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
    console.log(resultado.assets)
  };

  const escolherDaGaleria = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Imcompátivel, mas funciona
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
    console.log(resultado.assets[0].uri)
  };

  function Botao({ nome, icon, onPress }) {
    return (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.botoes,
            {
              backgroundColor: pressed ? "#E6FFFA" : "#fff",
              transform: [{ scale: pressed ? 0.95 : 1 }]
            }
          ]}
        >
          {icon}
          <Text style={styles.nomeBotao}>{nome}</Text>
        </Pressable>
      );
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
          <Text style={styles.titulo}>Adicione sua foto</Text>
          <View style={styles.fotoContainer}>
            <Pressable style={styles.fotoPerfil} onPress={() => tirarFoto()}>
              {imagem ?
                <Image source={{ uri: imagem }} style={styles.imagem}/> : <Ionicons name="person-outline" size={75} color="white"  style={styles.fotoPerfil2}/>
              }
            </Pressable>
  
            <View style={styles.iconeEditar}>
              <Ionicons name="camera" size={16} color="#fff" />
            </View>
  
          </View>
          <View style={styles.containerBotoes}> 
  
            <Pressable onPress={() => escolherDaGaleria()} style={styles.btn}>
              <Text style={{fontSize: 20, color: "white"}}>Escolher da Galeria</Text>
            </Pressable>
  
            
          </View>
          <View style={styles.containerBotoes2}>
            <Pressable
              onPress={() => navigation.navigate("cadastroPessoal")}
              style={styles.btnVoltar}
            >
              <Text style={styles.setaVoltar}>{"<"}</Text>
            </Pressable>
  
            <Pressable style={styles.btnProximo}>
              {imagem ? <Text style={styles.textoProximo}>Próximo</Text> : <Text style={styles.textoProximo}>Pular</Text>}
  
              <View style={styles.circuloSeta}>
                <Text style={styles.setaProximo}>{">"}</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    );
}

