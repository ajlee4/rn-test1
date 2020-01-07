import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ContactScreen = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.contact}>
        Adress: 220072, Республика Беларусь, Минск, ул Петруся Бровки, 19.
      </Text>
      <Text style={styles.contact}>Tel: +375336242548</Text>
      <Text style={styles.contact}>Email: priemnaya@physics.by</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  contact: {
    fontFamily: "open-regular",
    fontSize: 16
  }
});
