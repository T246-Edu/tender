import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import AppBtn from "../../components/AppButton";
import AppScreen from "../../components/AppScreen";
import CustomText from "../../components/CustomText";
import TextField from "../../components/TextField";
import Colors from "../../config/Colors";
import Airtable from "airtable";
import { useNavigation } from "@react-navigation/native";

var base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
  "appU8ytGSqP2rWaHF"
);

function Reciever() {
  const [Food, SetFood] = useState();
  const [Amount, SetAmount] = useState();
  const [Location, SetLocation] = useState();
  const navigation = useNavigation();
  return (
    <AppScreen style={{ alignItems: "center" }}>
      <View style={{ marginTop: "25%" }}>
        <CustomText
          style={"bold head"}
          color={Colors.secondary}
          text="Presenter"
        />
      </View>
      <View style={{ justifyContent: "flex-start", marginTop: "5%" }}>
        <View style={{ marginLeft: 10 }}>
          <CustomText
            style={"bold medium"}
            text={"Food Type"}
            color={Colors.secondary}
          />
        </View>
        <TextField
          data={"Food"}
          otherStyles={{ backgroundColor: Colors.secondary }}
          placeholder={Colors.primary}
          onChangeText={(text) => SetFood(text)}
        />
      </View>
      <View style={{ justifyContent: "flex-start", marginTop: "20%" }}>
        <View style={{ marginLeft: 10 }}>
          <CustomText
            style={"bold medium"}
            text={"Amount"}
            color={Colors.secondary}
          />
        </View>
        <TextField
          data={"amount"}
          otherStyles={{ backgroundColor: Colors.secondary }}
          placeholder={Colors.primary}
          onChangeText={(text) => SetAmount(text)}
        />
      </View>
      <View style={{ justifyContent: "flex-start", marginTop: "20%" }}>
        <View style={{ marginLeft: 10 }}>
          <CustomText
            style={"bold medium"}
            text={"Location"}
            color={Colors.secondary}
          />
        </View>
        <TextField
          data={"Location"}
          otherStyles={{
            backgroundColor: Colors.secondary,
            marginBottom: "20%",
          }}
          placeholder={Colors.primary}
          onChangeText={(text) => SetLocation(text)}
        />
      </View>
      <AppBtn
        text={"Done"}
        style={{ width: "35%" }}
        onPress={() => {
          base("Presenter").create(
            [
              {
                fields: {
                  Amount: Amount,
                  FoodType: Food,
                  Location: Location,
                },
              },
            ],
            function (err, records) {
              if (err) {
                console.error(err);
                return;
              }
              records.forEach(function (record) {
                console.log(record.getId());
              });
            }
          );
          navigation.navigate("ExtraFood");
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});

export default Reciever;
