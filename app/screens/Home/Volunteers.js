import React from "react";
import {
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../config/Colors";
import CustomText from "../../components/CustomText";

function Volunteers() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        marginTop: StatusBar.currentHeight,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View></View>
      <CustomText
        text="Volunteers"
        style={"bold head"}
        color={Colors.secondary}
      />
      <TouchableOpacity
        style={styles.imageStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Map")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomText
            text={"MAP"}
            style={"bold medium"}
            color={Colors.secondary}
          />
        </View>
        <Image
          source={require("../../assets/images/Map.png")}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Food")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomText
            text={"Prepare Food"}
            style={"bold medium"}
            color={Colors.secondary}
          />
        </View>
        <Image
          source={require("../../assets/images/Preparefood.png")}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageStyle}
        activeOpacity={0.5}
        //onPress={() => navigation.navigate("ExtraFood")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomText
            text={"Report A need"}
            style={"bold medium"}
            color={Colors.secondary}
          />
        </View>
        <Image
          source={require("../../assets/images/Reportaneed.png")}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: "10%",
    marginBottom: 15,
    marginRight: "10%",
    width: "80%",
    height: 150,
    borderColor: Colors.secondary,
  },
});
export default Volunteers;
