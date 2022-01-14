import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../config/Colors";
import { Icon } from "react-native-elements";

function TextField({ data, name, otherStyles, placeholder, ...other }) {
  let dataDetect = "none";
  let Keyboard = "default";
  let autoCompleteType = "off";
  let password = false;
  data == "mail"
    ? ((dataDetect = "address"),
      (Keyboard = "email-address"),
      (autoCompleteType = "email"))
    : dataDetect == "none",
    (keyboardType = "default");
  data == "password"
    ? ((password = true), (autoCompleteType = "password"))
    : console.log("true");
  data === "amount" || data === "number" ? (Keyboard = "numeric") : console.log("");

  return (
    <View style={[styles.container, otherStyles]}>
      <Icon name={name} />
      <TextInput
        {...other}
        style={[styles.textIn, { width: "100%" }]}
        autoCompleteType={autoCompleteType}
        autoCorrect={true}
        dataDetectorTypes={dataDetect}
        keyboardAppearance="dark"
        keyboardType={Keyboard}
        placeholder={data}
        placeholderTextColor={placeholder}
        secureTextEntry={password}
        textAlign="left"
        underlineColorAndroid="#08122905"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "50%",
    borderColor: Colors.secondary,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  textIn: {
    paddingLeft: 10,
  },
});

export default TextField;
