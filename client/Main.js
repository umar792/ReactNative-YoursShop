import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";
import AllProducts from "./screens/AllProducts";
import BestDeals from "./screens/BestDeals";
import AllEventsPage from "./screens/AllEventsPage";
import CategoryProduct from "./screens/CategoryProduct";
import Footer from "./Components/Footer/Footer";
import Cart from "./screens/Cart";
import { useRoute } from "@react-navigation/native";
import SearchBox from "./Components/SearchItem/SearchBox";
import ConformOrder from "./screens/ConformOrder";
import PaymentPage from "./screens/PaymentPage";
import Login from "./screens/Login";
import ForgotPasswoedPage from "./screens/ForgotPasswoedPage";
import VerifyOtpForgotpassword from "./screens/VerifyOtpForgotpassword";
import SignUpScreen from "./screens/SignUpScreen";
import Profile from "./screens/Profile";

const Main = () => {
  const Stack = createNativeStackNavigator();
  const [SearchQuery, setSearchQuary] = useState("");
  const [SerachActive, setSearchActive] = useState(false);
  const [hideFooter, setHidefooter] = useState(false);

  const HomeScreen = (props) => (
    <Home
      {...props}
      SearchQuery={SearchQuery}
      setSearchQuary={setSearchQuary}
      SerachActive={SerachActive}
      setSearchActive={setSearchActive}
    />
  );

  return (
    // <NavigationContainer>
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home"
      >
        <Stack.Group>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="singleProduct" component={SingleProduct} />
          <Stack.Screen name="allproduct" component={AllProducts} />
          <Stack.Screen name="bestdeals" component={BestDeals} />
          <Stack.Screen name="allevents" component={AllEventsPage} />
          <Stack.Screen name="productcategory" component={CategoryProduct} />
          <Stack.Screen name="cartpage" component={Cart} />
          <Stack.Screen name="search" component={SearchBox} />
          <Stack.Screen name="conformOrder" component={ConformOrder} />
          <Stack.Screen name="payment" component={PaymentPage} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="forgotpassword" component={ForgotPasswoedPage} />
          <Stack.Screen name="signup" component={SignUpScreen} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen
            name="verifyotpforgotpassword"
            component={VerifyOtpForgotpassword}
          />
        </Stack.Group>
        {/* ---------------footer  */}
      </Stack.Navigator>
      <Footer
        SearchQuery={SearchQuery}
        setSearchQuary={setSearchQuary}
        SerachActive={SerachActive}
        setSearchActive={setSearchActive}
      />
    </>
    // </NavigationContainer>
  );
};

export default Main;
