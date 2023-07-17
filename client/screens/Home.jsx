import { View, Text } from "react-native";
import React from "react";
import { DefaultStyle } from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import HomeCarousal from "../Components/HomeCarousal/HomeCarousal";

const Home = ({ navigation }) => {
  // const navigate = useNavigation();
  return (
    <View style={DefaultStyle}>
      <HomeCarousal />
    </View>
  );
};

export default Home;
