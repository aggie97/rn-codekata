import React from "react";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Shopping</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate({ pathname: "browser" });
        }}
      >
        <Text>Go To Browser</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name="shopping" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
