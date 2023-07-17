import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const HomeCarousal = () => {
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: "100%", height: 150 }}
      />
      <Text
        style={{
          position: "absolute",
          top: 90,
          left: 10,
          backgroundColor: "black",
          color: "white",
          paddingHorizontal: 30,
          paddingVertical: 8,
        }}
      >
        Shop Now
      </Text>
    </View>
  );
};

export default HomeCarousal;
