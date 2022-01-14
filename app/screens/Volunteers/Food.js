import { Image, StyleSheet, View } from "react-native";
import Colors from "../../config/Colors";
import Airtable from "airtable";
import CustomText from "../../components/CustomText";
import { render } from "react-dom";

function Meal() {
  let dataUser;
  const base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
    "appU8ytGSqP2rWaHF"
  );
  base("meal")
    .select({
      view: "Grid view",
    })
    .eachPage((records, fetch) => {
      if (records.length == 0) {
        console.log("user doesn't exist!");
      } else {
        records.map((user) => {
          dataUser = user.fields;
          fetch();
        });
      }
    });
  return (
    <View style={styles.main}>
      <View style={styles.img}>
        <Image
          source={require("../../assets/images/Meal.png")}
          style={{
            width: undefined,
            height: undefined,
            marginLeft: "15%",
            flex:1,
          }}
          resizeMode="contain"
        />
        <CustomText
          text={"Protien: 30%"}
          color={Colors.primary}
          style={"bold medium"}
        />
        <CustomText
          text={"Carbohydrates: 60%"}
          color={Colors.primary}
          style={"bold medium"}
        />
        <CustomText
          text={"wholeGrain: 40%"}
          color={Colors.primary}
          style={"bold medium"}
        />
        <CustomText
          text={"Oils: 50%"}
          color={Colors.primary}
          style={"bold medium"}
        />
        <CustomText
          text={"Water: 20%"}
          color={Colors.primary}
          style={"bold medium"}
        />
        <CustomText
          text={"id_user: "}
          color={Colors.primary}
          style={"bold medium"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "50%",
    marginLeft: "25%",
  },
});
export default Meal;
