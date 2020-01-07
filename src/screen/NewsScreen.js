import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DATA } from "../data";

export const NewsScreen = ({ navigation }) => {
  const newsId = navigation.getParam("newsId");
  const news = DATA.find(item => item.id === newsId);
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: news.img }} style={styles.image}></Image>
      <View>
        <Text style={styles.newsText}>{news.allText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  newsText: {
    fontFamily: "open-regular",
    fontSize: 14
  }
});
