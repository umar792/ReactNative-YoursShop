import { View, Text, Platform, StatusBar, BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Headline, TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
  const [old, setold] = useState("");
  const [password, setpassword] = useState("");

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
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Headline
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Change Your Password
      </Headline>

      <View
        style={{
          marginTop: 50,
          width: "100%",
        }}
      >
        <TextInput
          //   placeholder="old"
          label="old password"
          keyboardType="old-address"
          value={old}
          onChangeText={(value) => setold(value)}
          style={{
            marginBottom: 20,
          }}
        />

        <TextInput
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setpassword(value)}
        />
        <TouchableOpacity onPress={() => navigate.navigate("forgotpassword")}>
          <Text
            style={{
              marginVertical: 20,
              color: "gray",
              textAlign: "right",
            }}
            onPress={() => navigate.navigate("forgotpassword")}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        textColor="white"
        style={{
          width: "100%",
          backgroundColor: "black",
        }}
      >
        Update
      </Button>
    </View>
  );
};

export default ChangePassword;
