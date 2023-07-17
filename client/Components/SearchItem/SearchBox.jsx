import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const SearchBox = ({
  SearchQuery,
  setSearchQuary,
  SerachActive,
  setSearchActive,
}) => {
  return (
    <>
      {SerachActive && (
        <View style={styles.searchBox}>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"arrow-left-thin"}
              size={50}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                backgroundColor: "white",
                shadowColor: "black",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 1,
                shadowRadius: 9.22,
                elevation: 23,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
});

export default SearchBox;
