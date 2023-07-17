import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const HomeCarousal = () => {
  return (
    <View style={{ position: "relative" }}>
      <Image
        // source={require("../../assets/icon.png")}
        source={{
          uri: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        }}
        style={{ width: "100%", height: 170 }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 110, left: 10 }}>
        <Text
          style={{
            backgroundColor: "white",
            color: "black",
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderColor: "black",
            borderWidth: 1,
          }}
        >
          Shop Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCarousal;
