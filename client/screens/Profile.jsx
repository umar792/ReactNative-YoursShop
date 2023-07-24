import { View, Text, Platform, StatusBar, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Headline } from "react-native-paper";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigate = useNavigation();

  const goback = () => {
    navigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", goback);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", goback);
    };
  }, []);
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
      }}
    >
      <Headline
        style={{
          textAlign: "center",
          paddingVertical: 10,
          marginBottom: 10,
          fontSize: 22,
          fontWeight: "bold",
          color: "white",
          backgroundColor: "black",
        }}
      >
        Your Profile
      </Headline>
      <View
        style={{
          padding: 13,
          height: 300,
          backgroundColor: "black",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar.Image
          style={{
            backgroundColor: "black",
            borderWidth: 1,
            borderColor: "white",
            marginBottom: 50,
          }}
          size={100}
        />
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            marginVertical: 1,
          }}
        >
          Usama Ansari
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Usama@gmail.com
        </Text>
      </View>
      {/* -------------------- */}
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Avatar.Icon
          icon="format-list-bulleted"
          style={{
            margin: 15,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}
        />
        <Avatar.Icon
          icon="view-dashboard"
          style={{
            margin: 10,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}
        />
        <Avatar.Icon
          icon="account-box-multiple-outline"
          style={{
            margin: 10,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}
        />
        <TouchableOpacity onPress={() => console.warn("hello")}>
          <Avatar.Icon
            icon="lock"
            style={{
              margin: 10,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,

              elevation: 11,
            }}
          />
        </TouchableOpacity>
        <Avatar.Icon
          icon="logout"
          style={{
            margin: 10,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
