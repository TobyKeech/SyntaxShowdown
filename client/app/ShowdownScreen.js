import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { Overlay } from "@rneui/themed";
import { Bars3Icon } from "react-native-heroicons/solid";

const ShowdownScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="bg-black" style={GlobalStyles.droidSafeArea}>
      <View className="absolute bottom-10 left-20">
        <Text className="text-white text-4xl">Player 1</Text>
      </View>
      <View className="absolute bottom-10 right-20">
        <Text className="text-white text-4xl">Player 2</Text>
      </View>
      <View className="absolute bottom-10 left-60">
        <Text className="text-white text-2xl">Player 1 HP</Text>
      </View>
      <View className="absolute bottom-10 right-60">
        <Text className="text-white text-2xl">Player 2 HP</Text>
      </View>
      <View className="items-center justify-center absolute left-0 right-0 bottom-10">
        <Text className="text-white text-5xl">VS</Text>
      </View>
    </View>
  );
};

export default ShowdownScreen;
