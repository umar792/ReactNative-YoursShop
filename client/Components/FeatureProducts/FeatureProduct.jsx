import { View, Text } from "react-native";
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
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Featured Products
      </Text>
      <View>
        {filterfeatureproduct &&
          filterfeatureproduct.map((item, i) => {
            return <ColumnAllProductView item={item} i={i} key={i} />;
          })}
      </View>
    </View>
  );
};

export default FeatureProduct;
