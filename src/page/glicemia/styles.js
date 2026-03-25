import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Usa isso, no lugar de pixels ex: wp("10%") e hp("10%")

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DA0CA',
    justifyContent: 'center',
    alignItems: "center",
    // gap: 50,
  },
// #052659
  containerEntrada: {
    flex: 0.15,
    backgroundColor: "#052659",
    justifyContent: "center",
    alignItems: "center",
    width: wp("80%"),
    marginBottom: hp("10%")
  },

  containerHistorico: {
    flex: 0.56,
    backgroundColor: "#052659",
    width: wp("80%"),
  },

  titulo: {
    color: "#C1E8FF",
    padding: 5,
  },

  input: {
    padding: 15,
    width: wp("60%"),
    borderWidth: 1.5,
    color: "#C1E8FF",
  },

  salvar: {
    alignItems: "center",
    width: wp("25%"),
    backgroundColor: "#C1E8FF"
  },
});