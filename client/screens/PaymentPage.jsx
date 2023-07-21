import { View, Text, Platform, StatusBar, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const PaymentPage = () => {
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "gray",
      }}
    >
      <Headline
        style={{
          paddingVertical: 20,
          fontWeight: "bold",
          fontSize: 30,
          color: "white",
        }}
      >
        Payment
      </Headline>
      <Button
        style={{
          backgroundColor: "#8C3333",
          width: "100%",
          borderRadius: 0,
          paddingVertical: 5,

          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginBottom: 2,
        }}
        textColor="white"
      >
        Cash on devlivery
      </Button>
      <Button
        style={{
          backgroundColor: "black",
          width: "100%",
          borderRadius: 0,
          paddingVertical: 5,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          marginBottom: 100,
        }}
        textColor="white"
      >
        Use debit/credit card
      </Button>
    </View>
  );
};

export default PaymentPage;
