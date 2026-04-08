import { Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

export default function Cadastro() {
  const navigation = useNavigation();

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
      </LinearGradient>

      <View style={styles.content}>

       
      </View>
    </View>
  );
}

