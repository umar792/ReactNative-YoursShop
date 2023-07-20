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
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
          {
            // map through the first ten product and display them
            sliceBestDeals && (
              <FlatList
                data={sliceBestDeals && sliceBestDeals}
                renderItem={({ item, index }) => {
                  return (
                    <AllProductView key={item._id} data={item} i={index} />
                  );
                }}
                keyExtractor={(item) => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            )
          }
          {/* </ScrollView> */}
        </View>
      </View>
    );
  }, [products]);
  return useMemoHook;
};

export default BestDeal;
