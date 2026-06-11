import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function PostoMap({ navigation }) {
  const [location, setLocation]               = useState(null);
  const [errorMsg, setErrorMsg]               = useState(null);
  const [address, setAddress]                 = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [loading, setLoading]                 = useState(true);

  // Pontos de interesse pré-definidos
  const [points] = useState([
  {
    id: 1,
    latitude: -23.5534,
    longitude: -46.3986,
    title: 'UBS Jardim Soares',
    description: 'Rua Feliciano de Mendonça, próximo à ETEC Guaianazes.',
  },
  {
    id: 2,
    latitude: -23.5398,
    longitude: -46.4175,
    title: 'UBS Guaianases I',
    description: 'Atendimento básico de saúde da região central de Guaianases.',
  },
  {
    id: 3,
    latitude: -23.5368,
    longitude: -46.4142,
    title: 'UBS Guaianases II',
    description: 'Unidade básica de saúde com atendimento ambulatorial.',
  },
  {
    id: 4,
    latitude: -23.5485,
    longitude: -46.4208,
    title: 'UBS Jardim Bandeirantes',
    description: 'Atendimento clínico e programas de saúde da família.',
  },
  {
    id: 5,
    latitude: -23.5504,
    longitude: -46.4161,
    title: 'UBS Jardim Aurora',
    description: 'Atendimento preventivo e consultas básicas.',
  },
  {
    id: 6,
    latitude: -23.5630,
    longitude: -46.3964,
    title: 'UBS Prefeito Celso Augusto Daniel',
    description: 'Unidade de saúde próxima ao Conjunto Habitacional JK.',
  },
  {
    id: 7,
    latitude: -23.5344,
    longitude: -46.4210,
    title: 'UBS São Carlos',
    description: 'Atendimento médico e vacinação.',
  },
  {
    id: 8,
    latitude: -23.5622,
    longitude: -46.4059,
    title: 'UBS São Paulo',
    description: 'Atendimento básico e acompanhamento familiar.',
  },
  {
    id: 9,
    latitude: -23.5406,
    longitude: -46.4290,
    title: 'UBS Vila Cosmopolita',
    description: 'Serviços de atenção primária à saúde.',
  },
  {
    id: 10,
    latitude: -23.5328,
    longitude: -46.4085,
    title: 'UBS Primeiro de Outubro',
    description: 'Atendimento clínico, vacinação e acompanhamento preventivo.',
  },
  {
    id: 11,
    latitude: -23.5523,
    longitude: -46.3950,
    title: 'UBS Parque Veredas',
    description: 'Na Estrada de Poá.',
  },
]);

  // ─── Permissão e localização atual ───────────────────────────────────────────
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        setLoading(false);
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setLoading(false);
    })();
  }, []);

  // ─── Busca por endereço ───────────────────────────────────────────────────────
  const handleSearchLocation = async () => {
    if (address.trim() === '') {
      Alert.alert('Campo vazio', 'Por favor, insira um endereço.');
      return;
    }
    try {
      const result = await Location.geocodeAsync(address);
      if (result.length > 0) {
        const { latitude, longitude } = result[0];
        setSearchedLocation({ latitude, longitude });
      } else {
        Alert.alert('Não encontrado', 'Endereço não encontrado.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao buscar o endereço.');
    }
  };

  // ─── UI ──────────────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* ── Cabeçalho ── */}
      <LinearGradient colors={['#1B5E5A', '#2E8B80']} style={styles.header}>
        <View style={styles.headerRow}>
          {navigation && (
            <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                >
                <Text style={styles.backArrow}>←</Text>
            </Pressable>
          )}
          <View>
            <Text style={styles.title}>Mapa</Text>
            <Text style={styles.subtitle}>Sua localização em tempo real</Text>
          </View>
        </View>

        {/* ── Barra de busca (dentro do header) ── */}
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar endereço..."
            placeholderTextColor="#7A9996"
            value={address}
            onChangeText={setAddress}
            onSubmitEditing={handleSearchLocation}
            returnKeyType="search"
          />
            <Pressable
                onPress={handleSearchLocation}
                style={({ pressed }) => [
                    styles.searchButton,
                    pressed && { opacity: 0.8 },
                ]}
                >
                <Text style={styles.searchIcon}>🔍</Text>
            </Pressable>
        </View>
      </LinearGradient>

      {/* ── Mensagem de erro ── */}
      {errorMsg && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>⚠️  {errorMsg}</Text>
        </View>
      )}

      {/* ── Loading ── */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1B5E5A" />
          <Text style={styles.loadingText}>Obtendo localização…</Text>
        </View>
      )}

      {/* ── Mapa ── */}
      {location && !loading && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={false}
          showsMyLocationButton={false}
        >
          {/* Marcador: localização atual */}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Sua Localização"
            description="Aqui está sua localização atual"
            // image={require('./assets/alf.png')}  ← descomente para ícone personalizado
          />

          {/* Marcadores: pontos de interesse */}
          {points.map((point) => (
            <Marker
              key={point.id}
              coordinate={{ latitude: point.latitude, longitude: point.longitude }}
              title={point.title}
              description={point.description}
              // image={require('./assets/alf.png')}  ← descomente para ícone personalizado
              onPress={() => setSearchedLocation(null)}
            />
          ))}

          {/* Marcador: endereço pesquisado */}
          {searchedLocation && (
            <Marker
              coordinate={searchedLocation}
              title="Novo Item"
              description={`Endereço: ${address}`}
              pinColor="blue"
              // image={require('./assets/alf.png')}  ← descomente para ícone personalizado
            />
          )}
        </MapView>
      )}

      {/* ── Legenda flutuante ── */}
      {location && !loading && (
        <View style={styles.legend}>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: '#FF3B30' }]} />
            <Text style={styles.legendLabel}>Localização atual</Text>
          </View>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: '#FF9500' }]} />
            <Text style={styles.legendLabel}>Pontos de interesse</Text>
          </View>
          {searchedLocation && (
            <View style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: '#007AFF' }]} />
              <Text style={styles.legendLabel}>Endereço buscado</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
