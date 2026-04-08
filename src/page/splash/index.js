import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function Splash() {

  return (
    <View style={styles.container}>
        <Animatable.View animation={"bounceIn"} duration={3000}
            style={styles.ima}>
            <Ionicons name="fitness" size={75} color="#235347" />
            <Text style={styles.text}>Saúde+</Text>
        </Animatable.View>
      <StatusBar style="auto" />
    </View>
  );
}

