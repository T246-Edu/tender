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

function Presenter() {
  const [Family, SetFamily] = useState();
  const [Location, SetLocation] = useState();
  const navigation = useNavigation();
  return (
    <AppScreen style={{ alignItems: "center" }}>
      <View style={{ marginTop: "25%" }}>
        <CustomText
          style={"bold head"}
          color={Colors.secondary}
          text="Receiver"
        />
      </View>
      <View style={{ justifyContent: "flex-start", marginTop: "5%" }}>
        <View style={{ marginLeft: 10 }}>
          <CustomText
            style={"bold medium"}
            text={"number of members"}
            color={Colors.secondary}
          />
        </View>
        <TextField
          data={"number"}
          otherStyles={{ backgroundColor: Colors.secondary }}
          placeholder={Colors.primary}
          onChangeText={(text) => SetFamily(text)}
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
          otherStyles={{ backgroundColor: Colors.secondary }}
          placeholder={Colors.primary}
          onChangeText={(text) => SetLocation(text)}
        />
      </View>
      <AppBtn
        text={"Done"}
        style={{ width: "35%", marginTop: "30%" }}
        onPress={() => {
          base("Reciever").create(
            [
              {
                fields: {
                  FamilyMembers: Family,
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

export default Presenter;
