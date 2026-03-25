import { Text, View, Pressable, StyleSheet} from 'react-native';
import React, { useEffect, useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Usa isso, no lugar de pixels ex: wp("10%") e hp("10%")

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// <MaterialIcons name="attach-money" size={24} color="black" /> ganhei money
// <MaterialIcons name="money-off" size={24} color="black" /> Perdi money

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);
    
    function visivelExato(date) {
        const dd = String(date.getDate()).padStart(2, "0");
        const meses = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
        const mon = meses[date.getMonth()];
        const yyyy = date.getFullYear();

        const hh = String(date.getHours()).padStart(2, "0");
        const mm = String(date.getMinutes()).padStart(2, "0");

        return `${dd}/${mon}/${yyyy} ${hh}:${mm}`;
    }

    return (
    <Pressable style={styles.container} onPress={() => setShowValue(!showValue)}>
        <View style={styles.content}>
            <View>
                <Text style={styles.date}>{new Date(data.date).toLocaleDateString('pt-BR')}</Text>
                <Text style={styles.label}>{new Date(data.date).toLocaleTimeString('pt-BR')}</Text>
            </View>

            <View style={styles.content2}>
                <Text style={{textAlign: "center"}}>{data.value}</Text>
            </View>

        </View>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp("3%"),
        borderBottomWidth: 0.5,
    },

    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 6,
        textAlignVertical: "center"
    },

    content2: {
        textAlign: "center",
        textAlignVertical: "center",
        margin: 10,
    },

    
    content2Mr: {
        textAlign: "center",
        textAlignVertical: "center",
        margin: 2,
    },

    date: {
        color: "#21C25E",
        fontWeight: "bold"
    },

    label: {
        fontWeight: "bold",
        fontSize: 16,
    },

    value:{
        fontSize: 16,
        color: "#2ecc71",
        fontWeight: "bold"
    },
    expenses:{
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: "bold"
    },

    skeleton: {
        marginTop: 15,
        width: wp("25%"),
        height: hp("2%"),
        backgroundColor: "#21C25E",
        borderRadius: 8,
        marginRight: wp("2%")
    },
})