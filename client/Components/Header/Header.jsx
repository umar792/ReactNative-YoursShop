import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { DefaultStyleForHeader } from "../../styles/Styles";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigate = useNavigation();
  return (
    <View style={[DefaultStyleForHeader, headerStyle.header]}>
      <TouchableOpacity>
        <Avatar.Icon
          icon={"menu"}
          style={{ backgroundColor: "#F6F6F5", width: 50, height: 30 }}
        />
      </TouchableOpacity>
      <Text
        style={{ fontSize: 25, fontWeight: "bold" }}
        onPress={() => navigate.navigate("home")}
      >
        Your<Text style={{ color: "red" }}>Shop</Text>
      </Text>
    </View>
  );
};

const headerStyle = StyleSheet.create({
  header: {
    borderBottomColor: "gray",
    paddingBottom: 5,
    height: 100,
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    backgroundColor: "#F6F6F5",
  },
});

export default Header;
