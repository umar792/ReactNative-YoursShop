import { View, Text, Platform, StatusBar, BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Headline, TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const VerifyOtpForgotpassword = () => {
  const [otp, setotp] = useState("");
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
        Reset Password
      </Headline>

      <View
        style={{
          marginTop: 50,
          width: "100%",
        }}
      >
        <TextInput
          //   placeholder="otp"
          label="otp"
          keyboardType="number-pad"
          value={otp}
          onChangeText={(value) => setotp(value)}
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
      </View>
      <Button
        textColor="white"
        style={{
          width: "100%",
          backgroundColor: "black",
          marginTop: 20,
        }}
      >
        Reset Password
      </Button>
      <Text
        style={{
          marginVertical: 20,
          fontSize: 25,
          color: "gray",
        }}
      >
        OR
      </Text>
      <Button
        textColor="white"
        style={{
          width: "100%",
          backgroundColor: "#8C3333",
        }}
        onPress={() => navigate.navigate("forgotpassword")}
      >
        Resend OTP
      </Button>
    </View>
  );
};

export default VerifyOtpForgotpassword;
