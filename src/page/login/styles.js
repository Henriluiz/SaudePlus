import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E5A",
  },

  scroll: {
    flexGrow: 1,
  },

  // TOPO VERDE
  containerImg: {
    alignItems: "center",
    marginTop: hp("6%"),
    marginBottom: hp("2%"),
  },

  logo: {
    width: wp("32%"),
    height: hp("16%"),
  },

  // PARTE BRANCA
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: hp("5%"),
    paddingBottom: hp("4%"),
    alignItems: "center",

    // sombra (Android + iOS)
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  titulo: {
    fontSize: width * 0.075,
    color: "#1B5E5A",
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 14,
    color: "#666",
    marginBottom: hp("4%"),
  },

  contInput: {
    width: "100%",
    alignItems: "center",
    gap: 14,
  },

  input: {
    width: "85%",
    height: 52,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize: width * 0.04,
    backgroundColor: "#F7F7F7",
  },

  erro: {
    width: "85%",
    color: "#FF4D4D",
    fontSize: 12,
    marginTop: -8,
  },

  botao: {
    marginTop: hp("2%"),
    width: "85%",
    height: 52,
    backgroundColor: "#1B5E5A",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoPressionado: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  linkCadastro: {
    marginTop: 15,
    color: "#666",
    fontSize: 14,
  },

  linkDestaque: {
    color: "#1B5E5A",
    fontWeight: "bold",
  },
});