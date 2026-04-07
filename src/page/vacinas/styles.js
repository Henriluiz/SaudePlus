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
    elevation: 5,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 15,
  },

  card: {
    backgroundColor: "#fff",
    width: "30%",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",

    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  cardPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },

  cardText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#2F7F7B",
  },

  cardSub: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },
});