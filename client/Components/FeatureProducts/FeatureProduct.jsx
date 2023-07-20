import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "../StaticData/StaticData";
import ColumnAllProductView from "../AllProductView/ColumnAllProductView";

const FeatureProduct = () => {
  const fateureProductdata =
    products && products.filter((i) => i.sold_out > 20);
  const filterfeatureproduct =
    fateureProductdata && fateureProductdata.reverse().slice(0, 30);
  return (
    <View
      style={{
        marginBottom: 50,
        // marginBottom: 50,
        // padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          letterSpacing: 1,
          fontFamily: "Roboto",
          color: "#8C3333",
          padding: 5,
        }}
      >
        Featured Products
      </Text>
      <View>
        {filterfeatureproduct && (
          <FlatList
            data={filterfeatureproduct && filterfeatureproduct}
            renderItem={({ item, index }) => {
              return <ColumnAllProductView item={item} i={index} key={index} />;
            }}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </View>
  );
};

export default FeatureProduct;
