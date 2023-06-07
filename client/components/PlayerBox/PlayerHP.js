import { View, Text } from "react-native";
import React from "react";

const PlayerHP = ({ characterhp }) => {
  return (
    <View>
      <Text className="text-white text-3xl pb-5">{characterhp.hp}</Text>
    </View>
  );
};

export default PlayerHP;
