import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { DATA } from "../data";
import { News } from "../components/News";

export const MainScreen = ({ navigation }) => {
  const openNewsHandler = news => {
    navigation.navigate("News", { newsId: news.id });
  };
  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        keyExtractor={news => news.id.toString()}
        renderItem={({ item }) => (
          <News news={item} onOpen={openNewsHandler}></News>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    padding: 10
  }
});
