import {
  View,
  Text,
  Platform,
  StatusBar,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Headline } from "react-native-paper";
import { products } from "../Components/StaticData/StaticData";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";

const ConformOrder = () => {
  const cart = products && products.slice(0, 10);

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
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        backgroundColor: "white",
        height: "100%",
        zIndex: 100878,
      }}
    >
      <TouchableOpacity onPress={goback}>
        <Avatar.Icon
          icon="arrow-left-thin"
          size={40}
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "gray",
            margin: 10,
          }}
        />
      </TouchableOpacity>
      <Headline
        style={{
          textAlign: "center",
          marginVertical: 2,
          fontWeight: "bold",
        }}
      >
        Conform Order
      </Headline>
      <View
        style={{
          height: "55%",
          padding: 10,
          marginBottom: 20,
          //   borderColor: "gray",
          //   borderWidth: 3,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
        }}
      >
        <FlatList
          data={cart}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={{
                    uri:
                      item &&
                      item.images &&
                      item.images[item.images.length - 1].url,
                  }}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
                <Text>{item && item.name && item.name.slice(0, 10)}...</Text>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    2 x {item.discountPrice}$
                  </Text>
                  {/* <Text>{2 * item.discountPrice}</Text> */}
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View
        style={{
          marginTop: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      >
        <Text>SubToatal</Text>
        <Text>4000$</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      >
        <Text>Shipping Charges</Text>
        <Text>2$</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      >
        <Text>Toatal</Text>
        <Text>4002$</Text>
      </View>
      <Button
        style={{
          backgroundColor: "black",
          marginTop: 20,
        }}
        textColor="white"
      >
        Payment
      </Button>
    </View>
  );
};

export default ConformOrder;
