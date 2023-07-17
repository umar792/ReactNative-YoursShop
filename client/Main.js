import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { StatusBar, View } from "react-native";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Stack.Group>
        <Stack.Screen name="home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Main;
