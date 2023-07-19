import { View, Text, BackHandler, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Avatar } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ setSearchActive }) => {
  const isAuthanticated = false;

  const navigate = useNavigation();

  const backtohome = () => {
    navigate.navigate("home");
    setSearchActive(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backtohome);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backtohome);
    };
  }, []);

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#8C3333",
        height: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableWithoutFeedback onPress={backtohome}>
        <Avatar.Icon
          icon="home"
          size={40}
          style={{
            backgroundColor: "#8C3333",
          }}
          color="white"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigate.navigate("cartpage")}>
        <Avatar.Icon
          icon="cart"
          size={40}
          style={{
            backgroundColor: "#8C3333",
          }}
          color="white"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Avatar.Icon
          icon="view-dashboard"
          size={40}
          style={{
            backgroundColor: "#8C3333",
          }}
          color="white"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigate.navigate("search")}>
        <Avatar.Icon
          icon="magnify"
          size={40}
          style={{
            backgroundColor: "#8C3333",
          }}
          color="white"
        />
      </TouchableWithoutFeedback>
      {!isAuthanticated ? (
        <TouchableWithoutFeedback>
          <Avatar.Icon
            icon="account"
            size={40}
            style={{
              backgroundColor: "#8C3333",
            }}
            color="white"
          />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback>
          <Avatar.Image
            source={{
              uri: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689244677/sample/aiy87eq1crfos3fbiqje.jpg",
            }}
            size={35}
            style={{
              backgroundColor: "#8C3333",
            }}
            color="white"
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Footer;
