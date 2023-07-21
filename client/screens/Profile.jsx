import { View, Text, Platform, StatusBar } from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";

const Profile = () => {
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
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Usama@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default Profile;
