import { StyleSheet, StatusBar } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Usa isso, no lugar de pixels ex: wp("10%") e hp("10%")

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F6",
  },

  header: {
    paddingTop: 65,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    marginTop: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  box: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  erro: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },

  info: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#235347",
    marginBottom: 15,
    textAlign: "center",
  },

  contBotoes: {
    flexDirection:"row", 
    justifyContent: "center", 
    alignItems: "center",
    gap: 20,
    marginTop: 85
  },

  aviso: {
    marginTop: hp("3%"),
    alignItems: "center",
    justifyContent: "center",

  },

  botoes: {
    width: 150,
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  nomeBotao: {
    color: "#235347",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },

  

  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp("20%"),
  },

  textFooter: {
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#235347",
  },

  containerModal: {
    backgroundColor: "#1B5E5A",
    padding: 20,
    alignItems: "center",
    gap: 25,
    borderRadius: 35,

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  input: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  botaoConfirmar: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  botaoText: {
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "bold",
  },
  
  botaoTextEx: {
    color: "red",
    fontWeight: "bold",
  },
 
});