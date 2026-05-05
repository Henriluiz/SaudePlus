import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E5A",
  },

  containerImg: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp("6%"),
    paddingBottom: hp("3%"),
  },

  logo: {
    width: wp("65%"),
    height: hp("23%"),
  },

  container2: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: hp("4%"),
    // alignItems: "center",
  },

  titulo: {
    fontSize: width * 0.07,
    marginBottom: hp("4%"),
    color: "#1B5E5A",
    fontWeight: "bold",
    textAlign: "center",
  },

  pickerContainer: {
    width: "85%",
    borderColor: "#1B5E5A",
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: "#F9F9F9",
  },
  
  picker: {
    width: "100%",
    height: 50,
  },

  contInput: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },

  input: {
    width: "85%",
    height: 50,
    borderColor: "#1B5E5A",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: width * 0.04,
    backgroundColor: "#F9F9F9",
    marginBottom: hp("0.4%"),
  },

  erro: {
    width: "85%",
    color: "red",
    fontSize: 12,
    marginTop: -5,
  },

  containerBotoes: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    marginTop: hp("2%"),
  },

  botao: {
    width: "48%",
    height: 50,
    backgroundColor: "#1B5E5A",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoSecundario: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#1B5E5A",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  textoSecundario: {
    color: "#1B5E5A",
  },
});