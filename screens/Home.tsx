import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import List from "../components/List";
import Logo from "../components/Logo";
import SearchField from "../components/SearchField";
import { standardStyles } from "../constants/styles";
import { RootStackParamList } from "../constants/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const Home = ({ navigation }: Props) => {
  const [searchValue, setSearchValue] = useState<string>();

  return (
    <ScrollView style={standardStyles.container}>
      <View style={standardStyles.wrapper}>
        <Logo />
        <SearchField
          navigation={navigation}
          value={searchValue}
          onChange={setSearchValue}
        />
        <List navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Home;
