import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const News = ({ news, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(news)}>
      <View style={styles.news}>
        <ImageBackground source={{ uri: news.img }} style={styles.image}>
          <View style={styles.textWrap}>
            <Text style={styles.date}>
              {new Date(news.date).toLocaleDateString()}
            </Text>
          </View>
          <View>
            <Text style={styles.bottomText}>{news.text}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  news: {
    marginBottom: 15,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "space-between"
  },
  textWrap: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%"
  },
  date: {
    color: "#fff",
    fontFamily: "open-regular"
  },
  bottomText: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: "#fff",
    alignItems: "center",
    width: "100%",
    fontFamily: "open-bold"
  }
});
