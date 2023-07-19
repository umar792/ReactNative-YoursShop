import { View, Platform, StatusBar, ScrollView } from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";
import { products } from "../Components/StaticData/StaticData";
import ColumnAllProductView from "../Components/AllProductView/ColumnAllProductView";
import { FlatList } from "react-native";

const AllProducts = () => {
  const AllpRoductData = products;

  return (
    <View
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
        Total Product : {AllpRoductData && AllpRoductData.length}
      </Headline>

      <View>
        {/* {AllpRoductData &&
          AllpRoductData.map((item, index) => {
            return <ColumnAllProductView item={item} i={index} key={index} />;
          })} */}
        <FlatList
          data={AllpRoductData}
          renderItem={({ item, index }) => {
            // Destructure item from the parameter
            return <ColumnAllProductView item={item} i={index} key={index} />;
          }}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

export default AllProducts;
