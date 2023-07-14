import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
      </Stack.Group>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Main;
