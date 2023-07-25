import {
  View,
  Text,
  Platform,
  StatusBar,
  BackHandler,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Headline, TextInput, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ShopRegisration = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [avatar, setavatar] = useState("");
  const [password, setpassword] = useState("");
  const [shopDiscription, setshopDiscription] = useState("");
  const [Adress, setAdress] = useState("");
  const [number, setNumber] = useState();
  const [zipCode, setzipCode] = useState();

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

  const isAuthanticated = true;
  useEffect(() => {
    if (isAuthanticated) {
      navigate.navigate("shoppanel");
    }
  }, []);
  return (
    <ScrollView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginBottom: 0,
      }}
    >
      <Headline
        style={{
          textAlign: "center",
          margin: 20,
          marginVertical: 10,
          backgroundColor: "black",
          padding: 10,
          color: "white",
        }}
      >
        Register to shop
      </Headline>
      <Text style={{ padding: 10, color: "red" }}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 19 }}>
          Note :
        </Text>
        Plaese enter Valid Information after create account you cannot change
        anything
      </Text>
      <View>
        <View
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <View
            style={{
              marginTop: 0,
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar.Image
                size={80}
                source={{
                  uri: avatar
                    ? avatar
                    : "data:image/png;base64,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",
                }}
                style={{
                  alignItems: "center",
                  marginBottom: 20,
                }}
              />
            </View>
            <TextInput
              //   placeholder="Email"
              label="Shop Name"
              value={name}
              onChangeText={(value) => setname(value)}
              style={{
                marginBottom: 20,
              }}
            />
            <TextInput
              //   placeholder="Email"
              label="Mobile Number"
              value={number}
              keyboardType="number-pad"
              onChangeText={(value) => setNumber(value)}
              style={{
                marginBottom: 20,
              }}
            />
            <TextInput
              //   placeholder="Email"
              label="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={{
                marginBottom: 20,
              }}
            />
            <TextInput
              //   placeholder="Email"
              label="Shop Description"
              value={shopDiscription}
              onChangeText={(value) => setshopDiscription(value)}
              style={{
                marginBottom: 20,
              }}
            />
            <TextInput
              //   placeholder="Email"
              label="Shop Adress"
              value={Adress}
              onChangeText={(value) => setAdress(value)}
              style={{
                marginBottom: 20,
              }}
            />

            <TextInput
              label="Zipcode"
              value={zipCode}
              keyboardType="number-pad"
              onChangeText={(value) => setzipCode(value)}
              style={{
                marginBottom: 20,
              }}
            />
            <TextInput
              label="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setpassword(value)}
              style={{
                marginBottom: 20,
              }}
            />
            {/* <TouchableOpacity onPress={() => navigate.navigate("forgotpassword")}> */}
            <Text
              style={{
                marginVertical: 20,
                color: "gray",
                textAlign: "right",
              }}
              onPress={() => navigate.navigate("forgotpassword")}
            >
              Forgot Password
            </Text>
            {/* </TouchableOpacity> */}
          </View>
          <Button
            textColor="white"
            style={{
              width: "100%",
              backgroundColor: "black",
            }}
          >
            Register
          </Button>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 25,
              color: "gray",
            }}
          >
            OR
          </Text>
          <Button
            textColor="white"
            style={{
              width: "100%",
              backgroundColor: "#8C3333",
            }}
            onPress={() => navigate.navigate("shoplogin")}
          >
            Login
          </Button>
          <View style={{ height: 200 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShopRegisration;
