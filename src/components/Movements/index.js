import { Text, View, Pressable, StyleSheet } from 'react-native';
import React, { useState } from "react";

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(true);

  const valor = Number(data.value);

  let cor = "#4CA6A8";
  if (valor > 140) cor = "#E53935";
  else if (valor < 70) cor = "#FFA000";

  return (
    <Pressable
      style={[styles.container, { borderLeftColor: cor }]}
      onPress={() => setShowValue(!showValue)}
    >
      <View style={styles.content}>
        <Text style={styles.date}>
          {new Date(data.date).toLocaleString('pt-BR')}
        </Text>

        <Text style={[styles.value, { color: cor }]}>
          {showValue ? `${data.value} mg/dl` : "••••"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7F6",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderLeftWidth: 5,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  date: {
    color: "#235347",
    fontWeight: "bold",
  },

  value: {
    fontWeight: "bold",
  },
});