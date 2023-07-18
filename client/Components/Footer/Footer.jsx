import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native";

const Footer = ({ setSearchQuary, SerachActive, setSearchActive }) => {
  const isAuthanticated = false;

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#8C3333",
        height: 45,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableWithoutFeedback>
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
      <TouchableWithoutFeedback onPress={() => setSearchActive(true)}>
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
