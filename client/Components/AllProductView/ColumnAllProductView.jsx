import { View, Text, Image } from "react-native";
import React from "react";
import { Button, Headline } from "react-native-paper";

const ColumnAllProductView = ({ item, i }) => {
  return (
    <View
      style={{
        borderWidth: 0,
        borderColor: "white",
        marginVertical: 2,
        paddingHorizontal: 10,
        height: 160,
        width: "100%",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: 20,
          gap: 10,
        }}
      >
        <Image
          source={{
            uri: item.images && item.images[item.images.length - 1].url,
          }}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
          }}
        />
        <View style={{ flex: 1 }}>
          <Text>{item.name && item.name.slice(0, 100)}...</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Headline style={{ fontWeight: "bold" }}>
              ${item.discountPrice}
            </Headline>
            <Text style={{ color: "green", fontWeight: "bold" }}>
              Sold{item.sold_out}
            </Text>
          </View>
        </View>
      </View>
      <Button
        style={{
          backgroundColor: i % 2 === 0 ? "#8C3333" : "black",
          borderRadius: 0,
          borderTopLeftRadius: 20,
          marginTop: 5,
          borderTopRightRadius: 20,
        }}
        textColor={i % 2 === 0 ? "white" : "white"}
      >
        Add to card
      </Button>
    </View>
  );
};

export default ColumnAllProductView;
