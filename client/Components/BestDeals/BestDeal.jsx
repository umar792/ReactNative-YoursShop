import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { products } from "../StaticData/StaticData";

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
          color: "red",
        }}
      >
        <TouchableOpacity activeOpacity={1}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sliceBestDeals &&
              sliceBestDeals.map((item) => {
                return (
                  <View
                    style={{
                      backgroundColor: item % 2 === 0 ? "black" : "white",
                    }}
                    key={item._id}
                  >
                    <Image
                      source={{
                        uri:
                          item.images &&
                          item.images[item.images.length - 1].url,
                      }}
                      style={{ width: 150, height: 150, resizeMode: "contain" }}
                    />
                  </View>
                );
              })}
          </ScrollView>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default BestDeal;
