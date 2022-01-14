import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Airtable from "airtable";
import { StyleSheet, View } from "react-native";
import AppBtn from "../../components/AppButton";
import CustomText from "../../components/CustomText";
import AppScreen from "../../components/AppScreen";
import TextField from "../../components/TextField";
import Colors from "../../config/Colors";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@userAccount", value);
  } catch (e) {}
};

function Login() {
  const navigation = useNavigation();
  const [messege, setmessege] = useState("Login!");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  function login(mail, password) {
    if (mail == "" || password == "") {
      setmessege("Email and Password cannot be empty");
    } else {
      const base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
        "appU8ytGSqP2rWaHF"
      );
      base("users")
        .select({
          view: "Grid view",
          filterByFormula: `AND(OR(SEARCH('${mail}',{mail})))`,
        })
        .eachPage((records, fetch) => {
          console.log(records.length);
          if (records.length == 0) {
            setmessege("User Doesn't exist");
          } else {
            records.map((user) => {
              console.log(user.fields.password);
              if (user.fields.password == password) {
                storeData(user.fields.Name).then(
                  navigation.navigate("mainScreen")
                );
                setmessege("Success");
                console.log("exists");
              } else {
                setmessege("Wrong pass");
              }
              fetch();
            });
          }
        });
    }
  }
  return (
    <AppScreen style={{ alignItems: "center" }}>
      <CustomText
        text="Log-in"
        style="bold head"
        otherStyle={{ marginTop: 100 }}
      />
      <View style={styles.hairline} />
      <TextField
        data="mail"
        placeholder={Colors.white}
        style={{ marginTop: 85 }}
        onChangeText={(text) => setMail(text)}
      />
      <TextField
        data="password"
        onChangeText={(text) => setPassword(text)}
        placeholder={Colors.white}
      />
      <AppBtn
        text="Login"
        style={{ marginTop: 130 }}
        onPress={() => {
          login(mail, password);
        }}
      />
      <AppBtn
        text="Return back"
        style={{
          backgroundColor: Colors.secondary,
          width: "30%",
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("PreAuth")}
      />
      <CustomText
        text={messege}
        otherStyle={{ marginTop: 10 }}
        style="medium"
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {},
  hairline: {
    backgroundColor: Colors.secondary,
    marginTop: 10,
    height: 2,
    width: "40%",
    marginBottom: 70,
  },
});

export default Login;
