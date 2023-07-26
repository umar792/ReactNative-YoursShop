import { View, Text, BackHandler, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ShoppanelSidebar = () => {
  const navigate = useNavigation();

  const backtohome = () => {
    navigate.navigate("home");
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backtohome);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backtohome);
    };
  }, []);
  return (
    <View>
      <Avatar.Icon
        icon="home"
        size={50}
        style={{ backgroundColor: "white" }}
        color="black"
      />
      <Avatar.Icon
        icon="view-dashboard"
        size={50}
        style={{ backgroundColor: "white" }}
        color="black"
      />
      <TouchableOpacity onPress={() => navigate.navigate("shopcreateproduct")}>
        <Avatar.Icon
          icon="folder-plus"
          size={50}
          style={{ backgroundColor: "white" }}
          color="black"
        />
      </TouchableOpacity>

      <Avatar.Icon
        icon="shopping-music"
        size={50}
        style={{ backgroundColor: "white" }}
        color="black"
      />
      <Avatar.Icon
        icon="order-bool-descending"
        size={50}
        style={{ backgroundColor: "white" }}
        color="black"
      />
      <Avatar.Icon
        icon="folder-plus"
        size={50}
        style={{ backgroundColor: "white" }}
        color="black"
      />
    </View>
  );
};

export default ShoppanelSidebar;
