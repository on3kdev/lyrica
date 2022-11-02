import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants/styles";
import LogoIcon from "./svg/Logo";

const Logo = () => (
  <LinearGradient colors={["#c31432", "#240b36"]} style={styles.wrapper}>
    <LogoIcon color="#fff" />
  </LinearGradient>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    width: 140,
    height: 140,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 75,
    marginTop: 75,
    padding: 25,
    borderRadius: 100,
  },
});

export default Logo;
