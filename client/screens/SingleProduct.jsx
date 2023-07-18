import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { Avatar, Button, Headline } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const data = {
  _id: "64afd5906af42a190a77661e",
  name: "BAYKA Wall Shelves for Bedroom Decor, Floating Wall Shelves for Living Room Kitchen Storage, Wall Mounted Rustic Wood Floating Shelves for Kids Books, Small Shelf for Bathroom(Black，Set of 3)",
  description:
    'Paulownia Wood and Industrial Metal\n【Keeps your Wall Organized】Three boards of different lengths allow you to plan the layout you need, while iron brackets are easier to match with rustic, vintage, modern and more styles to design a look for your home. Our floating shelves are an amazing choice if you need extra storage space or if you want to get some visual enjoyment in the space.\n【Three Floating Shelves for All】Simply designed with solid paulownia wood and industrial matte metal brackets that fit both styles of rustic and contemporary. Because of the magic of "floating", these floating shelves are suitable for almost any room of the home – from displaying living room decorations to storing children\'s room items, or making simple bookshelves in the study.\n【Simple Combinations, More Creativity】 Added triangle design elements to provide two different display methods. Install these shelves with the board on top of the brackets or below to provide more choices for your layout. Choose your favorite look and create your own personal style. Natural Wood boards can be DIY stained.\n【Sturdier and Easy to Install: Large】16.5 × 5.5 × 4.6 inches; Medium: 14.2 × 5.5 × 4.6 inches; Small: 11.4 × 5.5 × 4.6 inches. These floating shelves are wider and sturdier than others to safely hold collectibles, photos, small plants and showcase favorite dishes or build your own coffee bar. Easy to assemble with all necessary hardware included according to the instruction steps.\n【Extra Uses】 BAYKA floating shelves can be used as cat shelves to "play" with your cat, giving cute cats extra space to move and rest without taking up floor space, which makes them more active. Every shelf can hold 40 pounds, and the sturdy structure allows the cat to jump on or off easily and safely.',
  category: "Home & Lifestyle",
  Tags: "BAYKA Wall Shelves for Bedroom Decor, Float",
  originalPrice: 30,
  discountPrice: 19,
  stock: 20,
  images: [
    {
      public_id: "sample/xgqgzatjboclkczdt0ld",
      url: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
      _id: "64afd5906af42a190a77661f",
    },
    {
      public_id: "sample/xqeyzov0ipa07m6w4j0f",
      url: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xqeyzov0ipa07m6w4j0f.jpg",
      _id: "64afd5906af42a190a776620",
    },
    {
      public_id: "sample/uiidscjbwyjqokaesitp",
      url: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245071/sample/uiidscjbwyjqokaesitp.jpg",
      _id: "64afd5906af42a190a776621",
    },
    {
      public_id: "sample/ovpqzkr2se8nk8rppmih",
      url: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245071/sample/ovpqzkr2se8nk8rppmih.jpg",
      _id: "64afd5906af42a190a776622",
    },
  ],
  owner: {
    avatar: {
      public_id: "Inventory/yxq9crr2ch7ngdtrly9o",
      url: "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689244815/Inventory/yxq9crr2ch7ngdtrly9o.jpg",
    },
    _id: "64afd48f32d1db33d92cf586",
    shopName: "Umar Shop",
    number: 3060711508,
    email: "umar0711509@gmail.com",
    Adress: "lahore firdous market street number 3 , pakistan",
    zipcode: 32499,
    password: "$2b$10$sTptk./orFFP3LFLDQ8QVeHUO9GI9LEkf605qaSOgIVyoVvzJJVlu",
    products: ["64afd5906af42a190a77661e"],
    events: [],
    shopDescription: "My Shop contain all type of products",
    OTP: null,
    OTP_Expire: null,
    verify: true,
    createdAt: "2023-07-13T10:40:15.358Z",
    __v: 1,
  },
  sold_out: 0,
  createdAt: "2023-07-13T10:29:27.881Z",
  reviews: [],
  __v: 0,
};

const SingleProduct = () => {
  const dataimages = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245071/sample/ovpqzkr2se8nk8rppmih.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245071/sample/uiidscjbwyjqokaesitp.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xqeyzov0ipa07m6w4j0f.jpg",
    },
  ];
  const router = useRoute();
  const id = router.params;
  const navigate = useNavigation();
  const goBak = () => {
    navigate.goBack();
    return true;
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity >= data.stock) {
      setQuantity(data.stock);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decriment = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", goBak);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", goBak);
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ width: "100%" }}>
      <Image
        style={{
          width: "100%",
          height: 200,
          marginTop: 10,
          resizeMode: "contain",
        }}
        source={{ uri: item.imageUrl }}
      />
    </View>
  );
  return (
    <ScrollView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          marginBottom: 10,
        }}
      >
        <Carousel
          layout="default"
          data={dataimages}
          renderItem={renderItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width - 10}
          loop={true}
          autoplay={true}
          autoplayInterval={3000} // Set the interval as desired (3 seconds in this example)
        />
        <TouchableOpacity
          onPress={goBak}
          style={{
            position: "absolute",
            top: 2,
            left: 2,
          }}
        >
          <Avatar.Icon
            icon="arrow-left"
            size={50}
            style={{
              backgroundColor: "white",
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          height: "100%",
          backgroundColor: "#112A45",
          //   backgroundColor: "#8C3333",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            margin: 5,
            fontSize: 16,
            color: "white",
            fontFamily: "Roboto",
          }}
        >
          {data.name}
        </Text>
        <Headline
          style={{
            color: "white",
            marginVertical: 10,
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Price : ${data.discountPrice}
        </Headline>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Quantity
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableWithoutFeedback onPress={decriment}>
              <Avatar.Icon
                icon="minus"
                size={30}
                style={{
                  backgroundColor: "white",
                  marginHorizontal: 5,
                }}
              />
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 24,
                marginHorizontal: 5,
                color: "white",
              }}
            >
              {quantity}
            </Text>
            <TouchableWithoutFeedback onPress={increment}>
              <Avatar.Icon
                icon="plus"
                size={30}
                style={{
                  backgroundColor: "white",
                  marginHorizontal: 5,
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableWithoutFeedback>
          <Button
            style={{
              width: "100%",
              backgroundColor: "white",
              marginTop: 10,
              borderRadius: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            textColor="black"
          >
            Add to card
          </Button>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Button
            style={{
              width: "100%",
              backgroundColor: "black",
              marginTop: 5,
              borderRadius: 0,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            textColor="white"
          >
            Buy now
          </Button>
        </TouchableWithoutFeedback>
        <Text
          style={{
            marginVertical: 15,
            color: "gray",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          ShopName : {data && data.owner && data.owner.shopName}
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>
          Product Description :{" "}
          <Text style={{ color: "gray", fontSize: 15 }}>
            {data && data.description}
          </Text>
        </Text>
        <View style={{ height: 100 }}>
          <Headline
            style={{
              marginTop: 20,
              color: "white",
            }}
          >
            Reviews : No yet reviews
          </Headline>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default SingleProduct;
