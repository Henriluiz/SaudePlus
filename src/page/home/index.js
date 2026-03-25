import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Glicemia() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text>Glicemia</Text>
      <StatusBar style="auto" />
    </View>
  );
}