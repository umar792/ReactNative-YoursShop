import { View, Text, Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Headline } from "react-native-paper";
import ShoppanelSidebar from "../Components/ShopPanleSidebar/ShoppanelSidebar";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";

const ShopPanel = () => {
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
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
          width: 50,
          borderRightColor: "gray",
          borderWidth: 2,
          overflow: "hidden",
        }}
      >
        <ShoppanelSidebar />
      </View>
      <View style={{ height: "100%", backgroundColor: "white", flex: 1 }}>
        <ShopRideBar />
      </View>
    </View>
  );
};

export default ShopPanel;

const ShopRideBar = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 6,
          flexDirection: "row",
          borderBottomColor: "gray",
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>YourShop</Text>
        <Avatar.Image
          source={{
            uri: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689244815/Inventory/yxq9crr2ch7ngdtrly9o.jpg",
          }}
          size={50}
        />
      </View>

      {/* ====================== */}
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.9)",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar.Icon
            icon="bank"
            size={50}
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            color="white"
          />
          <Headline style={{ color: "white" }}>Total Selles</Headline>
        </View>
        <Headline
          style={{
            color: "white",
            paddingLeft: 10,
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          $876
        </Headline>
      </View>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.9)",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar.Icon
            icon="order-bool-descending"
            size={50}
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            color="white"
          />
          <Headline style={{ color: "white" }}>Total Orders</Headline>
        </View>
        <Headline
          style={{
            color: "white",
            paddingLeft: 10,
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          34
        </Headline>
      </View>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,.9)",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar.Icon
            icon="shopping"
            size={50}
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            color="white"
          />
          <Headline style={{ color: "white" }}>Total Products</Headline>
        </View>
        <Headline
          style={{
            color: "white",
            paddingLeft: 10,
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          8
        </Headline>
      </View>
    </View>
  );
};
