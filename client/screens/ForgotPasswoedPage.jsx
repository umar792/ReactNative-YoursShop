import { View, Text, Platform, StatusBar, BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Headline, TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswoedPage = () => {
  const [email, setEmail] = useState("");

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
        }}
      >
        Forgot Password
      </Headline>

      <View
        style={{
          marginTop: 30,
          width: "100%",
        }}
      >
        <TextInput
          //   placeholder="Email"
          label="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={{
            marginBottom: 20,
          }}
        />
      </View>
      <Button
        textColor="white"
        style={{
          width: "100%",
          backgroundColor: "black",
        }}
        onPress={() => navigate.navigate("verifyotpforgotpassword")}
      >
        Get OTP
      </Button>
    </View>
  );
};

export default ForgotPasswoedPage;
