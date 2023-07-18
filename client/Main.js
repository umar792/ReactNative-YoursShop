import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";

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
        <Stack.Screen name="singleProduct" component={SingleProduct} />
      </Stack.Group>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Main;
