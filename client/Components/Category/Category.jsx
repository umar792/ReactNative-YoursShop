import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";

const Category = () => {
  const category = [
    {
      _id: 17,
      value: "Computers and Laptops",
      iconName: "laptop",
    },
    {
      _id: 10,
      value: "Sports & Outdoor",
      iconName: "cricket",
    },
    {
      _id: 1,
      value: "Groceries & Pets",
      iconName: "paw",
    },
    {
      _id: 2,
      value: "Health & Beauty",
      iconName: "beach",
    },
    {
      _id: 3,
      value: "Men's Fashion",
      iconName: "human-male-male",
    },
    {
      _id: 4,
      value: "Women's Fashion",
      iconName: "human-female-dance",
    },
    {
      _id: 5,
      value: "Mother & Baby",
      iconName: "human-female-girl",
    },
    {
      _id: 6,
      value: "Home & Lifestyle",
      iconName: "home",
    },
    {
      _id: 7,
      value: "Electronic Devices",
      iconName: "passport-biometric",
    },
    {
      _id: 8,
      value: "Electronic Accessories",
      iconName: "passport-biometric",
    },
    {
      _id: 9,
      value: "TV & Home Appliances",
      iconName: "television",
    },

    {
      _id: 11,
      value: "Watches, Bags & Jewellery",
      iconName: "watch",
    },
    {
      _id: 12,
      value: "Automotive & Motorbike",
      iconName: "motorbike",
    },
    {
      _id: 13,
      value: "Other",
      iconName: "store",
    },
  ];

  const [selectCategory, setCategory] = useState("");
  const cliconcategory = (id) => {
    setCategory(id);
  };
  return (
    <View style={{ marginVertical: 20, paddingLeft: 3 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ display: "flex", flexDirection: "row" }}
      >
        {category.map((item, index) => {
          return (
            <TouchableOpacity
              key={item._id}
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                marginHorizontal: 4,
                borderRadius: 10,
                paddingHorizontal: 10,
                backgroundColor:
                  selectCategory === item._id ? "gray" : "#F6F6F5",
              }}
              onPress={() => cliconcategory(item._id)}
            >
              <Text
                style={{
                  color: selectCategory === item._id ? "white" : "black",
                }}
              >
                {item.value}
              </Text>
              <Avatar.Icon
                color={selectCategory === item._id ? "white" : "black"}
                icon={item.iconName}
                size={30}
                style={{
                  marginLeft: 2,

                  backgroundColor:
                    selectCategory === item._id ? "gray" : "#F6F6F5",
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
