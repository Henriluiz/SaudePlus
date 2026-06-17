import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const TIPOS_SANGUINEOS = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];

export default function TipoSanguineo() {
  const [tipoSelecionado, setTipoSelecionado] = useState(null);

  useEffect(() => {
    carregarTipo();
  }, []);

  async function carregarTipo() {
    try {
      const tipo = await AsyncStorage.getItem('@tipo_sanguineo');

      if (tipo) {
        setTipoSelecionado(tipo);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function salvarTipo() {
    try {
      await AsyncStorage.setItem(
        '@tipo_sanguineo',
        tipoSelecionado
      );

      Alert.alert(
        'Sucesso',
        'Tipo sanguíneo salvo com sucesso.'
      );
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível salvar.'
      );
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <LinearGradient
        colors={['#1B5E5A', '#4CA6A8']}
        style={styles.header}
      >
        <Text style={styles.title}>
          Tipo Sanguíneo
        </Text>

        <Text style={styles.subtitle}>
          Selecione o seu tipo sanguíneo
        </Text>
      </LinearGradient>

      <View style={styles.formCard}>
        <Text style={styles.label}>
          Escolha uma opção
        </Text>

        <View style={styles.bloodGrid}>
          {TIPOS_SANGUINEOS.map(tipo => (
            <Pressable
              key={tipo}
              onPress={() =>
                setTipoSelecionado(tipo)
              }
              style={[
                styles.bloodButton,
                tipoSelecionado === tipo &&
                  styles.bloodButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.bloodButtonText,
                  tipoSelecionado === tipo &&
                    styles.bloodButtonTextActive,
                ]}
              >
                {tipo}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>
            Tipo selecionado
          </Text>

          <Text style={styles.infoText}>
            {tipoSelecionado || 'Nenhum'}
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={salvarTipo}
          disabled={!tipoSelecionado}
        >
          <Text style={styles.buttonText}>
            Salvar
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}