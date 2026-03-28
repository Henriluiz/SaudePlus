import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F6",
  },

  header: {
    height: 170,
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  content: {
    flex: 1,
    marginTop: -35,
    backgroundColor: "#F5F7F6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  cardHistorico: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#235347",
  },

  input: {
    backgroundColor: "#F5F7F6",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#235347",
  },

  botao: {
    backgroundColor: "#4CA6A8",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerContent: {
  flexDirection: "row",
  alignItems: "center",
},
});