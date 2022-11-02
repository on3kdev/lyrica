import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./constants/styles";
import { Navigation } from "./navigation";

const App = () => (
  <SafeAreaProvider>
    <StatusBar backgroundColor={colors.white} />
    <Navigation />
  </SafeAreaProvider>
);

export default App;
