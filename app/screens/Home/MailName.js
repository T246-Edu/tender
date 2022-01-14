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

function ExtraFood() {
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
        text="Extra Food"
        style={"bold head"}
        color={Colors.secondary}
      />
      <TouchableOpacity
        style={styles.imageStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Reciever")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomText
            text={"Presenter"}
            style={"bold medium"}
            color={Colors.secondary}
          />
        </View>
        <Image
          source={require("../../assets/images/Presenter.png")}
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
        onPress={() => {
          navigation.navigate("Presenter");
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <CustomText
            text={"Extra Food"}
            style={"bold medium"}
            color={Colors.secondary}
          />
        </View>
        <Image
          source={require("../../assets/images/Receiver.png")}
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
export default ExtraFood;
