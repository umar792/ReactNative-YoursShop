import { Text, View } from "react-native";
import Main from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Components/Header/Header";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="black" />
      <Main />
    </NavigationContainer>
  );
}
