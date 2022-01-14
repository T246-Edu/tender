import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../config/Colors";
import CustomText from "./CustomText";

function AppBtn({ text, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress} style={{ marginTop: 12 }}>
        <CustomText text={text} style="bold medium" color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    height: 50,
    textAlign: "center",
    borderColor: Colors.secondary,
    borderWidth: 1,
    backgroundColor: Colors.secondary,
  },
});

export default AppBtn;
