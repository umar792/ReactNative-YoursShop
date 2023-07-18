import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { products } from "../StaticData/StaticData";
import AllProductView from "../AllProductView/AllProductView";

const BestDeal = () => {
  const bestDealPreoduct =
    products && [...products].sort((a, b) => b.sold_out - a.sold_out);
  const sliceBestDeals = bestDealPreoduct && bestDealPreoduct.slice(0, 10);
  return (
    <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          letterSpacing: 1,
          fontFamily: "Roboto",
          color: "#8C3333",
        }}
      >
        BestDeal
      </Text>

      {/* ----------------------- */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            // map through the first ten product and display them
            sliceBestDeals?.map((item, index) => {
              return <AllProductView key={item._id} data={item} i={index} />;
            })
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default BestDeal;
