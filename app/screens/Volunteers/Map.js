import * as React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import * as Location from "expo-location";
import Colors from "../../config/Colors";

export default function Map() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log(location);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 31.436068,
          longitude: 31.520225,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    borderRadius: 5,
    borderWidth: 5,
    borderColor: Colors.secondary,
    width: "98%",
    height: "98%",
  },
});
