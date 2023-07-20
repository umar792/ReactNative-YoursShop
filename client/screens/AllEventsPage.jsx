import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  BackHandler,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { Avatar, Headline } from "react-native-paper";
import ColumnAllProductView from "../Components/AllProductView/ColumnAllProductView";
import { AllEvents } from "../Components/StaticData/AllEvents";
import { useNavigation } from "@react-navigation/native";

const AllEventsPage = () => {
  const AllEnentsData = AllEvents && AllEvents;

  const navigate = useNavigation();
  const goback = () => {
    navigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", goback);

    return BackHandler.removeEventListener("hardwareBackPress", goback);
  }, []);

  return (
    <View
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
        Total Product : {AllEnentsData && AllEnentsData.length}
      </Headline>

      <View>
        {AllEnentsData && (
          <FlatList
            data={AllEnentsData}
            renderItem={({ item, index }) => {
              return <ColumnAllProductView item={item} i={index} key={index} />;
            }}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </View>
  );
};

export default AllEventsPage;
