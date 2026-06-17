import { Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const navigation = useNavigation();

  const { signOut } = useAuth();


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

      <LinearGradient
        colors={["#1B5E5A", "#4CA6A8"]}
        style={styles.header}
      >
        <Text style={styles.title}>HOME</Text>

        <Pressable
          style={styles.botaoLogout}
          onPress={signOut}
        >
          <MaterialCommunityIcons
            name="logout"
            size={24}
            color="#FFF"
          />
  </Pressable>
      </LinearGradient>

      <View style={styles.content}>

        <View style={styles.fileira}>
          <Botao nome="Sangue"
          onPress={() => navigation.navigate("TipoSanguineo")}
           icon={<MaterialCommunityIcons name="water-plus" size={30} color="#235347" />} />
          <Botao nome="Água"
            onPress={() => navigation.navigate("Agua")}
           icon={<Ionicons name="water" size={30} color="#235347" />} />
          <Botao nome="Remédio"
            onPress={() => navigation.navigate("Remedio")}
           icon={<MaterialCommunityIcons name="pill" size={30} color="#235347" />} />
        </View>

        <View style={styles.fileira}>
          <Botao nome="Alergias" icon={<MaterialCommunityIcons name="virus" size={30} color="#235347" />} />

          {/* 🔥 BOTÃO FUNCIONANDO */}
          <Botao 
            nome="Glicemia"
            onPress={() => navigation.navigate("Glicemia")}
            icon={<MaterialCommunityIcons name="diabetes" size={30} color="#235347" />} 
          />

          <Botao nome="Pressão" icon={<Ionicons name="heart" size={30} color="#235347" />} />
        </View>

        <View style={styles.fileira}>
          <Botao 
          nome="IMC" 
          onPress={() => navigation.navigate("IMC")}
          icon={<MaterialCommunityIcons name="scale-bathroom" size={30} color="#235347" />} 
        />  
          <Botao 
          nome="Vacinas" 
          onPress={() => navigation.navigate("Vacinas")}
          icon={<MaterialCommunityIcons name="needle" size={30} color="#235347" />} 
        />
          <Botao 
            nome="Postos"
            onPress={() => navigation.navigate("Postomap")}
            icon={<MaterialCommunityIcons name="map" size={30} color="#235347" />} />
        </View>

        <View style={styles.fileira}>
          <Botao nome="Fruta"
          onPress={() => navigation.navigate("Nutriente")}
          icon={<MaterialCommunityIcons name="food-apple" size={30} color="#235347" />} />
          <Botao nome="Dica" icon={<Ionicons name="chatbubble-ellipses" size={30} color="#235347" />} />
          <Botao nome="Emergência" icon={<MaterialCommunityIcons name="alarm-light" size={30} color="#B00020" />} />
        </View>

      </View>
    </View>
  );
}

