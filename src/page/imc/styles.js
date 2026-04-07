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

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  box: {
    backgroundColor: "#fff",
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

  grafico: {
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },

  imcValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2F7F7B",
  },

  imcLabel: {
    fontSize: 14,
    color: "#777",
  },

  table: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },

  rowTable: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
  },

  highlight: {
    backgroundColor: "#FFF59D",
  },

  cell: {
    fontSize: 13,
    color: "#333",
  },

  idealBox: {
    backgroundColor: "#E0F2F1",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  idealText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2F7F7B",
  },
});