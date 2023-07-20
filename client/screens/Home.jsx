import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
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

const Home = ({ setSearchActive }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <View style={DefaultStyle}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              setSearchActive={setSearchActive}
              setDrawer={setDrawer}
              drawer={drawer}
            />
            <HomeCarousal />
            <Category />
            <BestDeal />
            <EventDeal />
            <FeatureProduct />
            <DrawerNavigation setDrawer={setDrawer} drawer={drawer} />
          </>
        }
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
