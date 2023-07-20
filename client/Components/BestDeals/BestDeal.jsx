import { View, Text, FlatList } from "react-native";
import React, { useMemo } from "react";
import { products } from "../StaticData/StaticData";
import AllProductView from "../AllProductView/AllProductView";

const BestDeal = () => {
  const bestDealPreoduct =
    products &&
    [...products]
      .filter((i) => i.sold_out > 0)
      .sort((a, b) => b.sold_out - a.sold_out);
  const sliceBestDeals = bestDealPreoduct && bestDealPreoduct.slice(0, 10);
  const useMemoHook = useMemo(() => {
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
          {
            // map through the first ten product and display them
            sliceBestDeals && (
              <FlatList
                data={sliceBestDeals && sliceBestDeals}
                renderItem={({ item, index }) => {
                  return (
                    <View key={index}>
                      <AllProductView key={item._id} data={item} i={index} />
                    </View>
                  );
                }}
                keyExtractor={(item) => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            )
          }
        </View>
      </View>
    );
  }, [products]);
  return useMemoHook;
};

export default BestDeal;
