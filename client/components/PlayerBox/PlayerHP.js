import { View, Text } from "react-native";
import React from "react";

const PlayerHP = ({ characterhp }) => {
  return (
   <View >
      <Text className=" text-6xl text-green-400">{characterhp.hp}</Text>
    </View>
  );
};

export default PlayerHP;
