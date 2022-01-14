import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../config/Colors";

function CustomText({ text, style, color, otherStyle }) {
  return (
    <View>
      <Text
        style={[
          styles.container,
          style == "bold" ? { fontWeight: "bold" } : console.log(""),
          style == "head" ? { fontSize: 40 } : console.log(""),
          style == "bold head"
            ? [styles.bold, { fontSize: 40 }]
            : console.log(""),
          style == "medium" ? { fontSize: 20 } : console.log(""),
          style == "bold medium"
            ? [{ fontSize: 20, fontWeight: "bold" }]
            : console.log(""),
          color && { color: color },
          ,
          otherStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    color: Colors.white,
  },
});

export default CustomText;
