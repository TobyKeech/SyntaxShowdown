import { View, Text } from "react-native";
import React from "react";

const PlayerHP = ({ characterhp }) => {
  return (
    <View className="flex flex-col justify- h-screen">
      <Text className="text-6xl text-green-400">{characterhp.hp}</Text>
    </View>
  );
};

export default PlayerHP;
