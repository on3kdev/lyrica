import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants/styles";
import { RootStackParamList } from "../constants/types";
import SearchIcon from "./svg/Search";

interface Props {
  value: string | undefined;
  onChange: (value: string) => void;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const splitSearch = (value: string) => {
  const splitted = value.split(" - ");

  return { title: splitted[0], artist: splitted[1] };
};

const SearchField = ({ value, onChange, navigation }: Props) => (
  <View style={styles.inputField}>
    <TextInput
      placeholder="Artist - Title"
      style={styles.input}
      value={value}
      onChangeText={onChange}
    />
    <TouchableOpacity
      onPress={() =>
        value && navigation.push("Lyrics", { song: splitSearch(value) })
      }
    >
      <SearchIcon color={colors.textGrey} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    color: colors.textGrey,
    width: "88%",
  },
});

export default SearchField;
