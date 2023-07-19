import { View, Text, ScrollView, StatusBar, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { products } from "../Components/StaticData/StaticData";
import ColumnAllProductView from "../Components/AllProductView/ColumnAllProductView";
import { Headline } from "react-native-paper";

const CategoryProduct = () => {
  const router = useRoute();
  const FilterTheProduct =
    products && products.filter((item) => item.category === router.params);
  const nvaigate = useNavigation();

  const GoBack = () => {
    nvaigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", GoBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", GoBack);
    };
  }, []);

  return (
    <View>
      <ScrollView
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
          Total Product : {FilterTheProduct && FilterTheProduct.length}
        </Headline>

        <View>
          {FilterTheProduct && FilterTheProduct.length > 0 ? (
            FilterTheProduct &&
            FilterTheProduct.map((item, index) => {
              return <ColumnAllProductView item={item} i={index} key={index} />;
            })
          ) : (
            <Text
              style={{
                backgroundColor: "gray",
                color: "white",
                marginVertical: 20,
                padding: 15,
                width: "100%",
              }}
            >
              NO Product Found
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryProduct;
