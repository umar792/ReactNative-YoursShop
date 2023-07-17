import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DefaultStyle } from "../styles/Styles";
import HomeCarousal from "../Components/HomeCarousal/HomeCarousal";
import Category from "../Components/Category/Category";
import SearchBox from "../Components/SearchItem/SearchBox";
import { Avatar } from "react-native-paper";

const Home = () => {
  const [SearchQuery, setSearchQuary] = useState("");
  const [SerachActive, setSearchActive] = useState(false);

  const handlePress = () => {
    setSearchActive(true);
  };

  return (
    <View style={DefaultStyle}>
      <TouchableOpacity style={{ zIndex: 8 }} onPress={handlePress}>
        <Avatar.Icon icon="magnify" style={style.searchIcon} size={50} />
      </TouchableOpacity>
      <HomeCarousal />
      <Category />
      <SearchBox
        SearchQuery={SearchQuery}
        setSearchQuary={setSearchQuary}
        SerachActive={SerachActive}
        setSearchActive={setSearchActive}
      />
    </View>
  );
};

const style = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    zIndex: 8,
    right: 10,
    top: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 23,
  },
});

export default Home;
