import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, ActivityIndicator, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome6, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from "react-native-svg";
import styles from "./styles";

export default function Agua() {
    const navigation = useNavigation();
    const [sizeIcon, setSizeIcon] = useState(45)
    
    const size = 280;
    const strokeWidth = 18;
    const progress = 90; // porcentagem
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressStroke = circumference - (circumference * progress) / 100;
  
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
      
      {/* HEADER */}
      <LinearGradient colors={["#1B5E5A", "#4CA6A8"]} style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Água</Text>
        <Ionicons name="speedometer" size={24} color="#fff" />
      </LinearGradient>

        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 85 }}>
            <Svg width={size} height={size}>
                {/* Fundo */}
                <Circle
                stroke="#E5E7EB"
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                />

                {/* Progresso */}
                <Circle
                stroke="#22C55E"
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={progressStroke}
                strokeLinecap="round"
                rotation="-90"
                origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>

            {/* Texto central */}
            <View
                style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <Text style={{ fontSize: 34, fontWeight: "bold", color: "#111827" }}>
                {progress}%
                </Text>
                <Text style={{ fontSize: 15, color: "#6B7280", marginTop: 4 }}>
                Meta diária
                </Text>
            </View>
        </View>
        <View style={{flexDirection:"row" , justifyContent: "center", alignItems: "center", gap: 20, marginTop: 85}}>
            <Botao nome="500ml" icon={<FontAwesome6 name="bottle-water" size={sizeIcon} color="black" />}
            />
            <Botao nome="250ml" icon={<MaterialCommunityIcons name="cup-water" size={sizeIcon} color="black" />}
            />
            {/* <Botao nome="250ml" icon={<AntDesign name="star" size={24} color="black" />} faz um botão personalizavel, que o user criará
            /> */}
        </View>

    </View>
  );
}