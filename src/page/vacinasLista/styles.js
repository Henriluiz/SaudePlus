import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
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
    justifyContent: "space-around",
    marginTop: -20,
    paddingHorizontal: 10,
  },

  card: {
    backgroundColor: "#EAEAEA",
    width: "30%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2F7F7B",
  },

  cardText: {
    textAlign: "center",
    fontSize: 12,
    color: "#2F7F7B",
    fontWeight: "600",
  },

  list: {
    marginTop: 15,
    paddingHorizontal: 10,
  },

  section: {
  backgroundColor: "#fff",
  borderRadius: 15,
  marginBottom: 12,
  padding: 12,

  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 4,
},

sectionHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

leftHeader: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
},

sectionTitle: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#2F7F7B",
},

vacinasContainer: {
  marginTop: 10,
},

item: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  backgroundColor: "#F5F7F7",
  padding: 10,
  borderRadius: 10,
  marginTop: 8,
},

itemText: {
  fontSize: 14,
  color: "#333",
  fontWeight: "500",
},
});