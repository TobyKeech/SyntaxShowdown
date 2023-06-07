import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Line, Svg } from "react-native-svg";

const FaceOff = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      layout: {
        orientation: ["landscape"],
      },
    });
  }, []);
  return (
    <SafeAreaView className="bg-black" style={GlobalStyles.droidSafeArea}>
      <View className="absolute left-20 top-20">
        <Text className="text-white text-5xl">Player 1 Image</Text>
      </View>

      <View className="absolute left-20 bottom-32">
        <Text className="text-white text-2xl">Player 1 Name</Text>
      </View>

      <View className="absolute right-20 top-32">
        <Text className="text-white text-2xl">Player 2 Name</Text>
      </View>

      <View className="absolute right-20 bottom-20">
        <Text className="text-white text-5xl">Player 2 Image</Text>
      </View>

      <View className="flex items-center justify-center top-44">
      <Text className="text-white text-5xl">VS</Text>
      </View>

      <View
        className="flex items-center justify-center"
        style={{
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}>
        <Svg
          className="absolute top-0 left-0 right-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg">
          <Line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="white"
            strokeWidth="2"
          />
        </Svg>
        
      </View>
    </SafeAreaView>
  );
};

export default FaceOff;
