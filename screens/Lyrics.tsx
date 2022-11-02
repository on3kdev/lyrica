import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, standardStyles } from "../constants/styles";
import { LyricsType, RootStackParamList, Song } from "../constants/types";

interface Props {
  route: any;
  navigation: NativeStackNavigationProp<RootStackParamList, "Lyrics">;
}

const getURL = (isArtist: boolean) => {
  const baseURL = "https://powerlyrics.p.rapidapi.com";

  return isArtist
    ? `${baseURL}/getlyricsfromtitleandartist`
    : `${baseURL}/getlyricsfromtitle`;
};

const Lyrics = ({ route, navigation }: Props) => {
  const { title, artist }: Song = route.params.song;
  const [data, setData] = useState<LyricsType>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const searchParams = new URLSearchParams();

      title && searchParams.append("title", title);
      artist && searchParams.append("artist", artist);

      const dataJSON = await fetch(
        `${getURL(!!artist)}?${searchParams.toString()}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "818c2f7897msh6bc9f8c78b5c4a4p1af8eejsnd9501101a8a5",
            "X-RapidAPI-Host": "powerlyrics.p.rapidapi.com",
          },
        }
      );

      const data = await dataJSON.json();

      if (!data.success) {
        setError(data.errmsg ?? data.message);
        setLoading(false);
        console.log(data.errmsg ?? data.message);
        return;
      }

      setData(data as LyricsType);
      setLoading(false);
    };

    init();
  }, [route.params.song]);

  return (
    <ScrollView style={standardStyles.container}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back" size={24} color={colors.textGrey} />
      </TouchableOpacity>

      {loading && (
        <View style={styles.wrapper}>
          <ActivityIndicator color={colors.white} size="large" />
        </View>
      )}
      {error && (
        <View style={styles.wrapper}>
          <MaterialIcons
            name="error"
            size={100}
            color={colors.lightGrey}
            style={styles.errorIcon}
          />
          <Text style={styles.title}>Ups, something went wrong!</Text>
          <Text style={styles.lyricsText}>{error}</Text>
        </View>
      )}
      {data && (
        <View style={standardStyles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.resolvedtitle}</Text>
            <Text style={styles.artist}>{data.resolvedartist}</Text>
          </View>
          <View>
            <Text style={styles.lyricsTitle}>Lyrics</Text>
            <Text style={styles.lyricsText}>{data.lyrics}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 50,
  },
  wrapper: {
    height: Dimensions.get("window").height - 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  backButton: {
    marginLeft: 25,
    marginTop: 50,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    color: colors.lightGrey,
    marginBottom: 8,
    textAlign: "center",
  },
  artist: {
    fontSize: 18,
    color: colors.textGrey,
    textAlign: "center",
  },
  lyricsTitle: {
    fontSize: 25,
    marginBottom: 15,
    color: colors.lightGrey,
  },
  lyricsText: {
    color: colors.textGrey,
  },
  errorIcon: { marginBottom: 25 },
});

export default Lyrics;
