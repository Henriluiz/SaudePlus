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
    paddingTop: 25,
  },

  fileira: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  botoes: {
    width: 100,
    height: 100,
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
    fontSize: 13,
    fontWeight: "600",
    marginTop: 5,
  },
});