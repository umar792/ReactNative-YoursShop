import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useMemo } from "react";
import { Avatar, Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CountDown from "../CountDownTimer/CountDown";
import { Toast } from "toastify-react-native";

const AllProductView = ({ data, i }) => {
  const navigate = useNavigation();

  const addtocard = () => {
    Toast.success("Product added to card");
  };

  const useMemoHook = useMemo(() => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <View
          style={{
            width: 230,
            height: 350,
            margin: 20,
            paddingTop: 10,
            borderRadius: 20,
            backgroundColor: "#FFFFFF",
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
          <View style={{ paddingHorizontal: 10 }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigate.navigate("singleProduct", data._id)}
            >
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
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{
                marginVertical: 5,
                color: "#8C3333",
                fontWeight: "bold",
              }}
            >
              ShopName : {data.owner && data.owner.shopName.slice(0, 80)}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigate.navigate("singleProduct", data._id)}
            >
              <Text style={{ marginBottom: 5 }}>
                {data.name && data.name.slice(0, 100)}...
              </Text>
            </TouchableWithoutFeedback>

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
          {data.endDate ? (
            <View>
              <Text
                style={{
                  fontSize: 0,
                  marginTop: 2,
                  textAlign: "center",
                }}
              >
                <CountDown startDate={data.startDate} endDate={data.endDate} />
              </Text>
            </View>
          ) : null}
          <Button
            style={{
              backgroundColor: i % 2 === 0 ? "black" : "#8C3333",
              width: "100%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderRadius: 0,
              position: "absolute",
              bottom: 0,
            }}
            textColor="white"
            icon="cart"
            onPress={addtocard}
          >
            Add to card
          </Button>
        </View>
      </TouchableOpacity>
    );
  }, [data]);
  return useMemoHook;
};

export default AllProductView;
