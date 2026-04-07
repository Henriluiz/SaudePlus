import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F6",
  },

  header: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
 
});