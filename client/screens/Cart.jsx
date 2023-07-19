import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { products } from "../Components/StaticData/StaticData";
import { Avatar, Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { BackHandler } from "react-native";

const Cart = () => {
  const cart = products && products.slice(0, 3);

  const navigate = useNavigation();

  const backtohome = () => {
    navigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backtohome);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backtohome);
    };
  }, []);

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {cart && cart.length > 0 ? (
        <ScrollView
          style={{
            padding: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity onPress={backtohome}>
              <Avatar.Icon
                icon="arrow-left-thin"
                size={40}
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              />
            </TouchableOpacity>
            <Headline
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Total Item in Card : {cart && cart.length}
            </Headline>
          </View>
          {cart &&
            cart.map((item, index) => {
              return <CartItem item={item} i={index} key={item._id} />;
            })}
        </ScrollView>
      ) : (
        <EmptyCard />
      )}
    </View>
  );
};

const EmptyCard = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 99,
        height: "100%",
      }}
    >
      <Button
        icon="cart-off"
        style={{
          backgroundColor: "#8C3333",
          width: "100%",
          padding: 7,
          borderRadius: 0,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 5,
        }}
        textColor="white"
      >
        No product in cart
      </Button>

      <Button
        onPress={() => navigate.navigate("allproduct")}
        icon="shopping"
        style={{
          backgroundColor: "black",
          width: "100%",
          padding: 7,
          borderRadius: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        textColor="white"
      >
        Buy a product
      </Button>
    </View>
  );
};

// -------------- cart item

const CartItem = ({ item, i }) => {
  const [qty, setQty] = useState(1);
  const increment = () => {
    if (qty < item.stock) {
      setQty(qty + 1);
    } else {
      setQty(item.stock);
    }
  };

  const decrement = () => {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };
  return (
    <View
      style={{
        height: 100,
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
      }}
    >
      <View
        style={{
          height: "100%",
          backgroundColor: i % 2 === 0 ? "black" : "#8C3333",
          width: "40%",
          borderBottomRightRadius: 100,
          borderTopRightRadius: 100,
        }}
      >
        <Image
          source={{
            uri: item && item.images && item.images[item.images.length - 1].url,
          }}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            position: "absolute",
            right: -20,
            top: 5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          {item && item.name && item.name.slice(0, 10)}...
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          ${item && item.discountPrice}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={decrement}>
          <Avatar.Icon
            icon="minus"
            size={30}
            style={{
              backgroundColor: i % 2 === 0 ? "black" : "#8C3333",
              marginVertical: 7,
            }}
            color="white"
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingLeft: 10,
            fontSize: 18,
          }}
        >
          {qty}
        </Text>
        <TouchableOpacity onPress={increment}>
          <Avatar.Icon
            icon="plus"
            size={30}
            style={{
              backgroundColor: i % 2 === 0 ? "black" : "#8C3333",
              marginVertical: 7,
            }}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
