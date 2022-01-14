import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DropDownPicker from "react-native-dropdown-picker";
import AppBtn from "../../components/AppButton";
import Airtable from "airtable";
import CustomText from "../../components/CustomText";
import Colors from "../../config/Colors";
import { useNavigation } from "@react-navigation/native";

var base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
  "appU8ytGSqP2rWaHF"
);
function createUser(Age, Height, Weight, HealthIssues) {
  base("Family health").create(
    [
      {
        fields: {
          Age: Age,
          Height: Height,
          Weight: Weight,
          Health: HealthIssues.toString(),
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
}
function FamilyHealth() {
  const navigation = useNavigation();
  const [Age, ChangeAge] = useState();
  const [height, changeHieght] = useState();
  const [weight, changeWeight] = useState();
  const [isSelected, setSelection] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "1 : 18",
      value: "1",
      icon: () => (
        <Image source={require("../../../assets/age.png")} style={styles.img} />
      ),
    },
    {
      label: "18 : 30",
      value: "2",
      icon: () => (
        <Image source={require("../../../assets/age.png")} style={styles.img} />
      ),
    },
    {
      label: "30 : 50",
      value: "3",
      icon: () => (
        <Image source={require("../../../assets/age.png")} style={styles.img} />
      ),
    },
    {
      label: "30 : 50",
      value: "4",
      icon: () => (
        <Image source={require("../../../assets/age.png")} style={styles.img} />
      ),
    },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {
      label: "100 : 150",
      value: "4",
      icon: () => (
        <Image
          source={require("../../../assets/height.png")}
          style={styles.img}
        />
      ),
    },
    {
      label: "150 : 170",
      value: "2",
      icon: () => (
        <Image
          source={require("../../../assets/height.png")}
          style={styles.img}
        />
      ),
    },
    {
      label: "170 : 190",
      value: "5",
      icon: () => (
        <Image
          source={require("../../../assets/height.png")}
          style={styles.img}
        />
      ),
    },
    {
      label: "190 :>",
      value: "6",
      icon: () => (
        <Image
          source={require("../../../assets/height.png")}
          style={styles.img}
        />
      ),
    },
  ]);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    {
      label: "20 : 40",
      value: "8",
      icon: () => (
        <Image
          source={require("../../../assets/weight.png")}
          style={styles.img}
        />
      ),
    },
    {
      label: "40 : 60",
      value: "9",
      icon: () => (
        <Image
          source={require("../../../assets/weight.png")}
          style={styles.img}
        />
      ),
    },
    {
      label: "60 : 80",
      value: "10",
      icon: () => (
        <Image
          source={require("../../../assets/weight.png")}
          style={styles.img}
        />
      ),
    },
    {
      label: "80 :>",
      value: "11",
      icon: () => (
        <Image
          source={require("../../../assets/weight.png")}
          style={styles.img}
        />
      ),
    },
  ]);

  return (
    <View
      style={{ backgroundColor: Colors.primary, flex: 1, alignItems: "center" }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          marginTop: 50,
          width: "70%",
          marginBottom: "20%",
        }}
      >
        <CustomText
          style={"bold head"}
          text={"Family health"}
          color={Colors.secondary}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <CustomText
            text={"Age"}
            style={"bold medium"}
            color={Colors.secondary}
            otherStyle={{ margin: 5, marginLeft: -20 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Image
              source={require("../../../assets/age.png")}
              style={{ width: 50, height: 50, marginRight: 5 }}
            />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              showTickIcon={true}
              onSelectItem={(item) => {
                ChangeAge(item.label);
                console.log(item.label);
              }}
              style={{ backgroundColor: Colors.secondary }}
              textStyle={{ color: Colors.primary }}
              dropDownContainerStyle={{ backgroundColor: Colors.secondary }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          marginTop: 50,
          width: "70%",
          marginBottom: "20%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <CustomText
            text={"Height"}
            style={"bold medium"}
            color={Colors.secondary}
            otherStyle={{ margin: 5, marginLeft: -20 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Image
              source={require("../../../assets/weight.png")}
              style={{ width: 50, height: 50, marginRight: 5 }}
            />
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              showTickIcon={true}
              onSelectItem={(item) => {
                changeHieght(item.label);
                console.log(item.label);
              }}
              style={{ backgroundColor: Colors.secondary }}
              textStyle={{ color: Colors.primary }}
              dropDownContainerStyle={{ backgroundColor: Colors.secondary }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          marginTop: 50,
          width: "70%",
          marginBottom: "20%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <CustomText
            text={"Weight"}
            style={"bold medium"}
            color={Colors.secondary}
            otherStyle={{ margin: 5, marginLeft: -20 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <Image
              source={require("../../../assets/weight.png")}
              style={{ width: 50, height: 50, marginRight: 5 }}
            />
            <DropDownPicker
              open={open3}
              value={value3}
              items={items3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              showTickIcon={true}
              onSelectItem={(item) => {
                changeWeight(item.label);
                console.log(item.label);
              }}
              style={{ backgroundColor: Colors.secondary }}
              textStyle={{ color: Colors.primary }}
              dropDownContainerStyle={{ backgroundColor: Colors.secondary }}
            />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <BouncyCheckbox
          size={25}
          fillColor="red"
          unfillColor="#FFFFFF"
          text="has health issues"
          iconStyle={{ borderColor: "red" }}
          onPress={(isCheckean) => {
            setSelection(isCheckean);
          }}
        />
      </View>
      <AppBtn
        text={"Continue"}
        style={{ color: Colors.secondary }}
        onPress={() => {
          createUser(Age, height, weight, isSelected);
          navigation.navigate("mainScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default FamilyHealth;
