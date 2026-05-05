import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Usa isso, no lugar de pixels ex: wp("10%") e hp("10%")

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B5E5A"
    },

    containerImg: {
        justifyContent: "center",
        alignItems: "center",
    },

    container2: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    logo: {
      width: wp("65%"),
      height: hp("23%"),
    },

    titulo: {
      fontSize: width * 0.08,
      marginBottom: hp("7%"),
      textAlign: "center",
      color: "#1B5E5A",
      fontWeight: "bold"
    },

    fotoContainer: {
        alignItems: "center",
        justifyContent: "center",
        // marginTop: -60,
        // marginBottom: 10,
    },

    fotoPerfil: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#fff",
        backgroundColor: "#1B5E5A",
        alignItems: "center",
        justifyContent: "center",
    },

    fotoPerfil2: {
      alignItems: "center",
      justifyContent: "center",
    },

    

    iconeEditar: {
      position: "absolute",
      bottom: 5,
      right: width * 0.35,
      backgroundColor: "#1B5E5A",
      width: 28,
      height: 28,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
    },

    btn: {
      width: wp("50%"),
      height: hp("5%"),
      borderColor: "#1B5E5A",
      borderWidth: 1.5,
      borderRadius: 12,
      fontSize: width * 0.14,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1B5E5A",
    },

    mensagemErro: {
      color: "red",
      marginTop: 5,
      fontSize: 14,
    },


  containerBotoes: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.05,
  },
  containerBotoes2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: wp("7%"),
    marginTop: hp("10%"),
  },

  btnVoltar: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 100,
    backgroundColor: "#1B5E5A",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },

  setaVoltar: {
    color: "#ffffff",
    fontSize: width * 0.07,
    fontWeight: "bold",
    marginBottom: 4,
  },

  imagem: {
    width: "97%",
    height: "97%",
    borderRadius: 100, // metade do width/height pra ficar circular
    resizeMode: "cover",
    
  },

  btnProximo: {
    flexDirection: "row",
    backgroundColor: "#1B5E5A",
    width: "70%",
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
  },

  textoProximo: {
    color: "#FFFFFF",
    fontSize: width * 0.05,
    fontWeight: "500",
  },

  circuloSeta: {
    width: width * 0.10,
    height: width * 0.10,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  setaProximo: {
    color: "#1B5E5A",
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: 4,
  },
});