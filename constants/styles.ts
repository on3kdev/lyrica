import { Dimensions, StyleSheet } from "react-native";

export const colors = {
  darkGrey: "#333333",
  textGrey: "#898989",
  lightGrey: "#DEDEDE",
  white: "#FFFFFF",
};

export const standardStyles = StyleSheet.create({
  container: {
    flex: 0,
    height: Dimensions.get("window").height,
    position: "relative",
    backgroundColor: colors.darkGrey,
  },
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    color: colors.textGrey,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
