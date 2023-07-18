import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";

const AllProductView = ({ data, i }) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View
        style={{
          width: 230,
          height: 340,
          margin: 20,
          padding: 10,
          //   backgroundColor: i % 2 === 0 ? "#112A45" : "#8C3333",
          //   backgroundColor: i % 2 === 0 ? "gray" : "white",
          backgroundColor: "white",
          //   borderEndColor: "gray",
          //   borderWidth: 1,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.21,
          shadowRadius: 7.68,
          elevation: 10,
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            zIndex: 9,
            top: 10,
            right: 0,
          }}
        >
          <Avatar.Icon
            icon="cart"
            size={40}
            color="#8C3333"
            style={{
              backgroundColor: "white",
            }}
          />
        </TouchableOpacity>
        <View>
          <Image
            source={{
              uri: data.images && data.images[data.images.length - 1].url,
            }}
            style={{
              width: "100%",
              height: 160,
              resizeMode: "contain",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              marginVertical: 5,
              color: "#8C3333",
              fontWeight: "bold",
            }}
          >
            ShopName : {data.owner && data.owner.shopName.slice(0, 80)}
          </Text>
          <Text style={{ marginVertical: 5 }}>
            {data.name && data.name.slice(0, 100)}...
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Headline style={{ fontWeight: "bold" }}>
              ${data.discountPrice}
            </Headline>
            <Text style={{ fontWeight: "bold", color: "green" }}>
              Sold{data.sold_out}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AllProductView;
