import { Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>   

      {/* HEADER */}
      <LinearGradient
        colors={["#1B5E5A", "#4CA6A8"]}
        style={styles.header}
      >
        <Text style={styles.title}>HOME</Text>
      </LinearGradient>

      {/* CONTEÚDO FEITO POR IA*/}
      <View style={styles.content}>

        <View style={styles.fileira}>
          <Botao nome="Sangue" icon={<MaterialCommunityIcons name="water-plus" size={30} color="#235347" />} />
          <Botao nome="Água" icon={<Ionicons name="water" size={30} color="#235347" />} />
          <Botao nome="Remédio" icon={<MaterialCommunityIcons name="pill" size={30} color="#235347" />} />
        </View>

        <View style={styles.fileira}>
          <Botao nome="Alergias" icon={<MaterialCommunityIcons name="virus" size={30} color="#235347" />} />
          <Botao nome="Glicemia" icon={<MaterialCommunityIcons name="diabetes" size={30} color="#235347" />} />
          <Botao nome="Pressão" icon={<Ionicons name="heart" size={30} color="#235347" />} />
        </View>

        <View style={styles.fileira}>
          <Botao nome="IMC" icon={<MaterialCommunityIcons name="scale-bathroom" size={30} color="#235347" />} />
          <Botao nome="Vacinas" icon={<MaterialCommunityIcons name="needle" size={30} color="#235347" />} />
          <Botao nome="Meditação" icon={<MaterialCommunityIcons name="meditation" size={30} color="#235347" />} />
        </View>

        <View style={styles.fileira}>
          <Botao nome="Fruta" icon={<MaterialCommunityIcons name="food-apple" size={30} color="#235347" />} />
          <Botao nome="Dica" icon={<Ionicons name="chatbubble-ellipses" size={30} color="#235347" />} />
          <Botao nome="Emergência" icon={<MaterialCommunityIcons name="alarm-light" size={30} color="#B00020" />} />
        </View>

      </View>

    </View>
  );
}

/* BOTÃO */
function Botao({ nome, icon }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.botoes,
        {
          backgroundColor: pressed ? "#E6FFFA" : "#fff",
          transform: [{ scale: pressed ? 0.95 : 1 }] // 👈 animação top
        }
      ]}
    >
      {icon}
      <Text style={styles.nomeBotao}>{nome}</Text>
    </Pressable>
  );
}