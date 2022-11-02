import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { RootStackParamList } from "../constants/types";
import { Home } from "../screens/Home";
import { Lyrics } from "../screens/Lyrics";

export const Navigation: FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lyrics" component={Lyrics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
