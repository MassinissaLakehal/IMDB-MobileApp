import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/logo-imdb.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Interstellar</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.grey}>2014</Text>
          <Text style={styles.grey}>PG-13</Text>
          <Text style={styles.grey}>2h 49min</Text>
          <Text style={styles.grey}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.presentationContainer}>
          <Image
            source={require("./assets/film.jpg")}
            style={styles.movieImg}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.synopsis}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <Button title="+ ADD TO WISHLIST" />
          </View>
        </View>
        <View style={styles.notationColumns}>
          <View style={styles.notationColumn}>
            <MaterialIcons name="star" size={24} color="#E6B91E" />
            <View style={styles.notationContainerMark}>
              <Text style={styles.whiteBold}>8.6</Text>
              <Text style={styles.white}>/10</Text>
            </View>
            <Text style={styles.grey}>1.1M</Text>
          </View>
          <View style={styles.notationColumn}>
            <MaterialIcons name="star-border" size={24} color="white" />
            <Text style={styles.white}>RATE THIS</Text>
          </View>
          <View style={styles.notationColumn}>
            <Text style={styles.mark}>74</Text>
            <Text style={styles.white}>Metascore</Text>
            <Text style={styles.notationGrey}>46 critic reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Text style={styles.castTitle}>Top Billed Cast</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.actors}>
            <View style={styles.actorContainer}>
              <Image
                source={require("./assets/matthew.jpg")}
                style={styles.actorImg}
                resizeMode="contain"
              />
              <Text style={styles.white}>Matthew McConaughey</Text>
              <Text style={styles.notationGrey}>Cooper</Text>
            </View>
            <View style={styles.actorContainer}>
              <Image
                source={require("./assets/anne.jpg")}
                style={styles.actorImg}
                resizeMode="contain"
              />
              <Text style={styles.white}>Anne Hathaway</Text>
              <Text style={styles.notationGrey}>Brand</Text>
            </View>
            <View style={styles.actorContainer}>
              <Image
                source={require("./assets/jessica.jpg")}
                style={styles.actorImg}
                resizeMode="contain"
              />
              <Text style={styles.white}>Jessica Chastain</Text>
              <Text style={styles.notationGrey}>Murph</Text>
            </View>
            <View style={styles.actorContainer}>
              <Image
                source={require("./assets/mackenzie.jpg")}
                style={styles.actorImg}
                resizeMode="contain"
              />
              <Text style={styles.white}>Mackenzie Foy</Text>
              <Text style={styles.notationGrey}>Murph</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.white}>Director</Text>
        <Text style={styles.notationGrey}>Christophe Nolan</Text>

        <Text style={styles.white}>Writers</Text>
        <Text style={styles.notationGrey}>
          Jonathan Nolan (written by) and Christopher Nolan (writter by)
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    marginTop: Constants.statusBarHeight,
    //   alignItems: "center",
    //   justifyContent: "center",
  },
  header: {
    //    height: 100,
    flex: 0.8,
    backgroundColor: "#393939",
    justifyContent: "center",
  },
  logo: {
    // flex: 0.7,
    width: 80,
    height: 80,
    //    backgroundColor: "white",
  },
  movieContainer: {
    backgroundColor: "#212121",
    //    height: 300,
    flex: 3.3,
    marginBottom: 17,
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  movieTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    marginBottom: 3,
    paddingLeft: 6,
  },
  descriptionContainer: {
    marginBottom: 20,
    fontSize: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  presentationContainer: {
    flexDirection: "row",
    width: 262,
    marginBottom: 15,
    //   justifyContent: "space-between",
  },
  synopsis: { color: "white", marginBottom: 15 },
  movieImg: {
    height: 110,
    width: 100,
    marginRight: 10,
  },
  notationColumns: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  notationColumn: { alignItems: "center" },
  mark: {
    color: "white",
    backgroundColor: "#61C74F",
    width: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  notationContainerMark: { flexDirection: "row" },
  notationGrey: { color: "#7C7C7C", fontSize: 12 },
  castContainer: {
    backgroundColor: "#212121",
    flex: 4.3,
    paddingHorizontal: 10,
  },
  actors: { flexDirection: "row", justifyContent: "space-between" },
  actorContainer: { backgroundColor: "#2A2A2A" },
  actorImg: { height: 170, width: 170 },
  castTitle: { fontSize: 25, color: "white", marginTop: 15, marginBottom: 10 },
  white: { color: "#FFFFFF" },
  grey: { color: "#7C7C7C" },
  whiteBold: { color: "#FFFFFF", fontWeight: "bold" },
});
