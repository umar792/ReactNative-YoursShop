import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  BackHandler,
} from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";
import ColumnAllProductView from "../Components/AllProductView/ColumnAllProductView";
import { products } from "../Components/StaticData/StaticData";

const BestDeals = () => {
  const AllEnentsData =
    products &&
    products
      .filter((i) => i.sold_out > 0)
      .sort((a, b) => b.sold_out - a.sold_out);

  return (
    <ScrollView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 20,
      }}
    >
      <Headline
        style={{
          marginVertical: 10,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Total Product : {AllEnentsData && AllEnentsData.length}
      </Headline>

      <View>
        {AllEnentsData &&
          AllEnentsData.map((item, index) => {
            return <ColumnAllProductView item={item} i={index} key={index} />;
          })}
      </View>
    </ScrollView>
  );
};

export default BestDeals;
