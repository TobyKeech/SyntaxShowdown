import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import React from "react";
import Hello from "../components/Hello";
import GlobalStyles from "../GlobalStyles";

const index = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="items-center bg-black" style={GlobalStyles.droidSafeArea}>
      <Text
        className="text-green-600 text-4xl p-10"
        style={{ fontFamily: "monospace" }}
      >
        Syntax Showdown
      </Text>
      <Hello />
    </View>
  );
};

export default index;
