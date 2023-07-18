import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button } from "react-native-paper";

const DrawerNavigation = ({ drawer, setDrawer }) => {
  const navigate = useNavigation();

  return (
    <>
      <View
        style={{
          position: "absolute",
          width: "90%",
          height: "100%",
          borderColor: "gray",
          backgroundColor: "#8C3333",
          zIndex: 99,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          transform: [{ translateX: drawer ? 0 : -400 }],
        }}
      >
        <TouchableWithoutFeedback onPress={() => setDrawer(false)}>
          <Avatar.Icon
            icon="arrow-left-thin"
            style={{
              //   position: "absolute",
              //   top: 40,
              //   right: 10,
              backgroundColor: "#8C3333",
            }}
            size={50}
          />
        </TouchableWithoutFeedback>
        <Button
          style={{
            backgroundColor: "white",
            borderRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          textColor="black"
        >
          Become a Seller
        </Button>
      </View>
    </>
  );
};

export default DrawerNavigation;
