import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PreAuth from "./app/screens/Start/PreAuth";
import Register from "./app/screens/Start/Register";
import Login from "./app/screens/Start/Login";
import MainScreen from "./app/screens/Home/firstScreen";
import FamilyHealth from "./app/screens/Home/FamilyHealth";
import ExtraFood from "./app/screens/Home/MailName";
import Volunteers from "./app/screens/Home/Volunteers";
import Map from "./app/screens/Volunteers/Map";
import Reciever from "./app/screens/ExtraFood/Reciever";
import Presenter from "./app/screens/ExtraFood/Presenter";
import Meal from "./app/screens/Volunteers/Food";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreAuth">
        <Stack.Screen
          name="PreAuth"
          component={PreAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FamilyHealth"
          component={FamilyHealth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExtraFood"
          component={ExtraFood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Volunteers"
          component={Volunteers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reciever"
          component={Reciever}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Presenter"
          component={Presenter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Food"
          component={Meal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
