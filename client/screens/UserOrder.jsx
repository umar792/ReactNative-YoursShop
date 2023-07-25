import { View, Text, BackHandler, Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Headline } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const orders = [
  {
    id: "xvsdhgjsdgjsdksjbdksjgwuwkbfk",
    shippingInfo: {
      city: "lahore",
      country: "pakistan",
      adress: "lahore firdous market pakistan",
    },
    paymentstatus: "cash on devlivery",
    totalprice: 44354,
    orderstatus: "processing",
  },
  {
    id: "xvsdhgjsdgjsdbdksjgwugiuwkbfk",
    shippingInfo: {
      city: "lahore",
      country: "pakistan",
      adress: "lahore firdous market pakistan",
    },
    paymentstatus: "cash on devlivery",
    totalprice: 44354,
    orderstatus: "complete",
  },
];

const UserOrder = () => {
  const navigate = useNavigation();

  const goback = () => {
    navigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", goback);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", goback);
    };
  }, []);
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Headline
        style={{
          backgroundColor: "black",
          color: "white",
          marginHorizontal: 30,
          marginVertical: 20,
          textAlign: "center",
          padding: 10,
        }}
      >
        Orders
      </Headline>
      <View>
        {orders && orders.length > 0 ? (
          <FlatList
            data={orders}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 9.22,
                    elevation: 12,
                    paddingBottom: 20,
                    marginHorizontal: 20,
                    marginVertical: 20,
                    backgroundColor: index % 2 === 0 ? "white" : "black",

                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,

                    color: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      backgroundColor: index % 2 === 0 ? "black" : "#8C3333",
                      padding: 20,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      marginBottom: 10,
                      fontWeight: "bold",
                    }}
                  >
                    ID - {item.id}
                  </Text>
                  <View
                    style={{
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: 10,
                        color: index % 2 === 0 ? "black" : "white",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Adress</Text> :{" "}
                      {item.shippingInfo.adress}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 10,
                        color: index % 2 === 0 ? "black" : "white",
                      }}
                    >
                      {" "}
                      <Text style={{ fontWeight: "bold" }}>
                        Payment method
                      </Text>{" "}
                      :{item.paymentstatus}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 10,
                        color: index % 2 === 0 ? "black" : "white",
                      }}
                    >
                      {" "}
                      <Text style={{ fontWeight: "bold" }}>Total Price</Text> :
                      ${item.totalprice} ,
                    </Text>
                    <Text
                      style={{
                        marginBottom: 10,
                        color: index % 2 === 0 ? "black" : "white",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Order Status</Text> :
                      {item.orderstatus}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        ) : (
          <Headline
            style={{
              marginVertical: 200,
              marginHorizontal: 20,
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: "gray",
              padding: 12,
              color: "white",
            }}
          >
            You Have No Order Yet.
          </Headline>
        )}
      </View>
    </View>
  );
};

export default UserOrder;
