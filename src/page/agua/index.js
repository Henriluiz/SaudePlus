import { useState } from "react";
import { View, Text, TextInput, ScrollView, Modal, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome6, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from "react-native-svg";
import styles from "./styles";

export default function Agua() {
    const navigation = useNavigation();
    const [sizeIcon, setSizeIcon] = useState(24); // Tamanho do icon 40 / 
    const [size, setSize] = useState(85); // Tamanho do Botão 115
    const [modal, setModal] = useState(false);
    const [progressoAtual, setProgressoAtual] = useState(0);
    const [aviso, setAviso] = useState("");
    const [meta, setMeta] = useState(2000);

    const [valorPs, setValorPs] = useState(0);
    const [entvalorPs, setEntValorPs] = useState("");
    const [personalizavel, setPersonalizavel] = useState(true)
    
    const sizeCir = 280;
    const strokeWidth = 18;
    const [progress, setProgress] = useState(0); // porcentagem
    const radius = (sizeCir - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressStroke = circumference - (circumference * progress) / 100;
  
    function Botao({ nome, icon, onPress }) {
        return (
            <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                width: size,
                height: size,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",

                elevation: 10,
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 6 }},
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

    function atualizarProgresso(){
        const porcentagem = Math.min((progressoAtual / meta) * 100, 100);

        if (porcentagem >= 100) {
            setAviso("Parabéns! Você atingiu sua meta de água hoje!");
        } else {
            setAviso(`Você já bebeu ${progressoAtual} ml de ${meta} ml.`);
        }

        setProgress(porcentagem)
    };

    function addAgua(valor) {
        setProgressoAtual(progressoAtual + valor);
        atualizarProgresso();
        console.log("Adicionado e Atualizado!")
    };

    function criarBotao(){
        if (entvalorPs) {
            setValorPs(entvalorPs);
            setPersonalizavel(true);
            setModal(false);
        } 
    };

    function excluirBotao(){
        setValorPs(0);
        setPersonalizavel(false);
        setModal(false);
    };
  
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <LinearGradient colors={["#1B5E5A", "#4CA6A8"]} style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Água</Text>
        <MaterialCommunityIcons name="cup-water" size={24} color="#fff" />
      </LinearGradient>
    
        <View style={styles.content}>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 85 }}>
                <Svg width={sizeCir} height={sizeCir}>
                    {/* Fundo */}
                    <Circle
                    stroke="#E5E7EB"
                    fill="none"
                    cx={sizeCir / 2}
                    cy={sizeCir / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    />

                    {/* Progresso */}
                    <Circle
                    stroke="#22C55E"
                    fill="none"
                    cx={sizeCir / 2}
                    cy={sizeCir / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={progressStroke}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${sizeCir / 2}, ${sizeCir / 2}`}
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
            { aviso && 
                <View style={styles.aviso}>
                    <Text>{aviso}</Text>
                </View>
            }

            <View style={styles.contBotoes}>
                <Botao nome="250ml" icon={<MaterialCommunityIcons name="cup-water" size={sizeIcon} color="black" />} onPress={() => addAgua(250)}
                />
                <Botao nome="500ml" icon={<FontAwesome6 name="bottle-water" size={sizeIcon} color="black" />} onPress={() => addAgua(500)}
                />
                { personalizavel && 
                <Botao nome={valorPs} icon={<AntDesign name="star" size={sizeIcon} color="black" />} onPress={() => addAgua(valorPs)}/>
                }
            </View>
            <View style={styles.footer}>
                <Pressable
                    onPress={() => setModal(true)}
                >
                    <Text style={styles.textFooter}>Adicione um botão personalizável</Text>
                </Pressable>
            </View>
        </View>

        <Modal transparent={true} visible={modal}>
            <Pressable style={styles.overlay} onPress={() => setModal(false)}>
                <View style={styles.containerModal}>
                    <Text style={{color: "#fff", fontSize: 18}}>Faça seu próprio botão: </Text>
                    <Botao nome={valorPs} icon={<AntDesign name="star" size={sizeIcon} color="black" />}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o ml do recipiente"
                        keyboardType="numeric"
                        value={entvalorPs}
                        onChangeText={(text) => setEntValorPs(text)}
                        maxLength={4}
                    />
                    <View style={{gap: 10}}>
                        <Pressable style={styles.botaoConfirmar} onPress={() => excluirBotao()}>
                            <Text style={styles.botaoTextEx}>Excluir Botão</Text>
                        </Pressable>
                        <Pressable style={styles.botaoConfirmar} onPress={() => criarBotao()}>
                            <Text style={styles.botaoText}>Confirmar</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Modal>

    </View>
  );
}