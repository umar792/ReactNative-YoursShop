import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { DefaultStyle } from "../styles/Styles";
import HomeCarousal from "../Components/HomeCarousal/HomeCarousal";
import Category from "../Components/Category/Category";
import SearchBox from "../Components/SearchItem/SearchBox";
import { Avatar } from "react-native-paper";
import Header from "../Components/Header/Header";
import BestDeal from "../Components/BestDeals/BestDeal";
import Footer from "../Components/Footer/Footer";
import EventDeal from "../Components/BestDeals/EventDeal";
import FeatureProduct from "../Components/FeatureProducts/FeatureProduct";
import DrawerNavigation from "../Components/DrawerNavigation/DrawerNavigation";

const product = [
  {
    _id: "gdsvjxbjsbxkjsbxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "gdsvjxbjsbxkbjbxjsbxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "gdsvjxbjsbxkjswew4ebxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "gdsvjxbjsbxkj3546rgsbxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "fdfr5",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "gdsvjxbj46567687sbxkjsbxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "gdsvjxb5767jsbxkjsbxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
  {
    _id: "gdsvjxbjs4657ytbxkjsbxkjsbx",
    name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books,",
    imagesrc:
      "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    price: 56,
  },
];

const Home = ({ setSearchActive }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <View style={DefaultStyle}>
      <Header
        setSearchActive={setSearchActive}
        setDrawer={setDrawer}
        drawer={drawer}
      />
      <ScrollView>
        <HomeCarousal />
        <Category />
        <BestDeal />
        <EventDeal />
        <FeatureProduct />
      </ScrollView>
      <DrawerNavigation setDrawer={setDrawer} drawer={drawer} />
    </View>
  );
};

const style = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    zIndex: 8,
    right: 10,
    top: 5,
    backgroundColor: "gray",

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 24,
  },
});

export default Home;
