import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Airtable from "airtable";
import { Formik } from "formik";
import * as yup from "yup";

import AppBtn from "../../components/AppButton";
import CustomText from "../../components/CustomText";
import AppScreen from "../../components/AppScreen";
import TextField from "../../components/TextField";
import Colors from "../../config/Colors";

function Register() {
  const navigation = useNavigation();
  const [messege, setmessege] = useState("Register!");
  function register(mail, password, name, phone, address) {
    const base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
      "appU8ytGSqP2rWaHF"
    );
    base("users")
      .select({
        view: "Grid view",
        filterByFormula: `AND(OR(SEARCH('${mail}',{mail})))`,
      })
      .eachPage((records, fetch) => {
        if (mail.includes("@") == false || mail.includes(".") == false) {
          setmessege("That email address is invalid!");
        } else if (records.length !== 0) {
          setmessege("That email address is already in use!");
        } else if (password.length < 6) {
          setmessege("That password must be at least 6 chars");
        } else {
          base("users").create(
            [
              {
                fields: {
                  mail: mail,
                  password: password,
                  Name: name,
                },
              },
            ],
            function (err, records) {
              if (err) {
                setmessege(`${err}`);
              }
            }
          );
          setmessege("Success");
          navigation.navigate("mainScreen");
        }
      });
  }
  return (
    <AppScreen style={{ alignItems: "center" }}>
      <CustomText
        text="Sign Up"
        style="bold head"
        otherStyle={{ marginTop: 100 }}
      />
      <View style={styles.hairline} />
      <Formik
        initialValues={{
          email: "",
          userName: "",
          password: "",
          conirmPass: "",
          phone: "",
          address: "",
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          phone: yup.string().required(),
          address: yup.string().required(),
          userName: yup.string().required().min(3),
          password: yup.string().required().min(6),
          conirmPass: yup
            .string()
            .required()
            .oneOf([yup.ref("password"), null], "passwords must match"),
        })}
        onSubmit={(values) =>
          register(
            values.email,
            values.password,
            values.userName,
            values.phone,
            values.address
          )
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ width: "100%", alignItems: "center" }}>
            <TextField
              data="user name"
              other="name"
              onChangeText={handleChange("userName")}
              onBlur={handleBlur("userName")}
              value={values.userName}
            />
            {errors.userName && touched.userName && (
              <CustomText text={errors.userName} otherStyle={styles.error} />
            )}
            <TextField
              data="mail"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <CustomText text={errors.email} otherStyle={styles.error} />
            )}
            <TextField
              data="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <CustomText text={errors.password} otherStyle={styles.error} />
            )}
            <TextField
              data="password"
              onChangeText={handleChange("conirmPass")}
              onBlur={handleBlur("conirmPass")}
              value={values.conirmPass}
            />
            {errors.conirmPass && touched.conirmPass && (
              <CustomText text={errors.conirmPass} otherStyle={styles.error} />
            )}
            <TextField
              data="number"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <CustomText text={errors.phone} otherStyle={styles.error} />
            )}
            <TextField
              data="address"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
            />
            {errors.address && touched.address && (
              <CustomText text={errors.address} otherStyle={styles.error} />
            )}
            <AppBtn
              text={"Register"}
              onPress={handleSubmit}
              style={{ marginTop: 10 }}
            />
            <AppBtn
              text={"Return Back"}
              style={{
                backgroundColor: Colors.primary,
                width: "30%",
                marginTop: 60,
              }}
              onPress={() => navigation.navigate("Home")}
            />
            <CustomText
              text={messege}
              otherStyle={{ marginTop: 10 }}
              style="medium"
            />
          </View>
        )}
      </Formik>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  hairline: {
    backgroundColor: Colors.secondary,
    marginTop: 10,
    height: 2,
    width: "50%",
    marginBottom: 70,
  },
  error: {
    color: Colors.grey,
    fontSize: 14,
  },
});

export default Register;
