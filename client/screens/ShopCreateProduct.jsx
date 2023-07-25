import {
  View,
  Text,
  BackHandler,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ShoppanelSidebar from "../Components/ShopPanleSidebar/ShoppanelSidebar";
import { Avatar, Headline, TextInput, Button } from "react-native-paper";
import { categorymenus } from "../Components/CategoryMenus";

const ShopCreateProduct = () => {
  const navigate = useNavigation();

  const backtohome = () => {
    navigate.navigate("home");
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
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
          width: 50,
          borderRightColor: "gray",
          borderWidth: 2,
          overflow: "hidden",
        }}
      >
        <ShoppanelSidebar />
      </View>
      <View style={{ height: "100%", backgroundColor: "white", flex: 1 }}>
        <CreateProductComponent />
      </View>
    </View>
  );
};

export default ShopCreateProduct;

const CreateProductComponent = () => {
  const [discription, setdiscription] = useState("");
  const [productname, setproductname] = useState("");
  const [password, setpassword] = useState("");
  const [shopDiscription, setshopDiscription] = useState("");
  const [Adress, setAdress] = useState("");
  const [stock, setstock] = useState();
  const [zipCode, setzipCode] = useState();
  const [category, setCategory] = useState("");

  console.warn(category);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };
  return (
    <View>
      <Headline
        style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}
      >
        Create Product
      </Headline>

      {/* ==================== */}
      <ScrollView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          marginBottom: 0,
        }}
      >
        <View>
          <View>
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
              ></View>
              <TextInput
                //   placeholder="discription"
                label="productname"
                value={productname}
                onChangeText={(value) => setproductname(value)}
                style={{
                  marginBottom: 20,
                }}
              />
              <TextInput
                //   placeholder="discription"
                label="Product stock"
                value={stock}
                keyboardType="number-pad"
                onChangeText={(value) => setstock(value)}
                style={{
                  marginBottom: 20,
                }}
              />
              <TextInput
                //   placeholder="discription"
                label="Product discription"
                keyboardType="discription-address"
                value={discription}
                onChangeText={(value) => setdiscription(value)}
                style={{
                  marginBottom: 20,
                }}
              />
              <View>
                {categorymenus.map((menu) => (
                  <TouchableOpacity
                    key={menu.id}
                    onPress={() => handleCategoryChange(menu.value)}
                  >
                    <Text>{menu.value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
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
            </View>
            <Button
              textColor="white"
              style={{
                width: "100%",
                backgroundColor: "black",
              }}
            >
              CresteProduct
            </Button>

            <View style={{ height: 200 }}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
