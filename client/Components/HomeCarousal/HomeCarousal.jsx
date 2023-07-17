import React from "react";
import { View, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const HomeCarousal = () => {
  const data = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xgqgzatjboclkczdt0ld.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245070/sample/xqeyzov0ipa07m6w4j0f.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dvgvcifrd/image/upload/v1689245071/sample/uiidscjbwyjqokaesitp.jpg",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{ width: "100%" }}>
      <Image
        style={{
          width: "100%",
          height: 150,
          marginTop: 10,
        }}
        source={{ uri: item.imageUrl }}
      />
    </View>
  );

  return (
    <View style={{ position: "relative", width: "100%" }}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width - 40}
        loop={true}
        autoplay={true}
        autoplayInterval={3000} // Set the interval as desired (3 seconds in this example)
      />
    </View>
  );
};

export default HomeCarousal;
