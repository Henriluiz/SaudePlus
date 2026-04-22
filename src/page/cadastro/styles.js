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
        width: wp("35%"),
        height: hp("20%"),
        marginTop: 25,
        alignItems: "center"
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
      width: "100%",
      height: "100%",
      margin: 57,
    },

    contInput: {
      alignItems: "center",
      gap: 10,
    },

    input: {
        width: "85%",
        height: 50,
        borderColor: "#A383FB",
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: width * 0.04,
      },

    label: {
      fontSize: 18,
      alignItems: "flex-start",
    },
});