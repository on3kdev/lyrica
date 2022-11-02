import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, standardStyles } from "../constants/styles";
import { RootStackParamList } from "../constants/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const data = [
  {
    title: "Doja",
    artist: "Central Cee",
    img: require("../assets/doja_central-cee.jpg"),
  },
  {
    title: "Bye Bye",
    artist: "Juice WRLD, Marshmello",
    img: require("../assets/bye-bye_juice-wrld.jpg"),
  },
  {
    title: "SUVs",
    artist: "Luciano",
    img: require("../assets/suvs_luciano.jpg"),
  },
  {
    title: "Gin and Drugs",
    artist: "Wiz Khalifa",
    img: require("../assets/gin-and-drugs_wiz-khalifa.jpg"),
  },
];

const List = ({ navigation }: Props) => (
  <View style={styles.list}>
    <>
      {data.map(({ title, artist, img }, key) => (
        <TouchableOpacity
          style={styles.item}
          key={key}
          onPress={() =>
            navigation.push("Lyrics", {
              song: { title, artist },
            })
          }
          activeOpacity={0.7}
        >
          <Image source={img} style={styles.img} />
          <Text style={[standardStyles.text, styles.title]}>{title}</Text>
          <Text style={[standardStyles.text, styles.artist]}>{artist}</Text>
        </TouchableOpacity>
      ))}
    </>
  </View>
);

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    paddingHorizontal: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    color: colors.lightGrey,
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
  },
  img: {
    borderRadius: 15,
    width: "100%",
    height: 180,
  },
});

export default List;
