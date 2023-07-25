import { Text, View } from "react-native";
import Main from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ToastManager, { Toast } from "toastify-react-native";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="black" />
      <ToastManager />
      <Main />
    </NavigationContainer>
  );
}
