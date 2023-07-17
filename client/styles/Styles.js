import { StyleSheet, Platform, StatusBar } from "react-native";

// ---------------------- All Colors
export const colors = StyleSheet.create({
  color1: "#c70049",
  color1_light1: "rgba(227,25,99)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  coloe3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
});

// --------------------- deafault style

export const DefaultStyle = StyleSheet.create({
  //   padding: 35,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});
// --------------------- deafault style

export const DefaultStyleForHeader = StyleSheet.create({
  padding: 2,
  paddingRight: 10,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  backgroundColor: colors.color2,
});

// ----------------------- input style

export const InputStyle = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});
