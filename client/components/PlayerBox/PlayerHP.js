import { View, Text } from "react-native";
import React from "react";

const PlayerHP = ({ characterhp }) => {

  return (
   <View style={{ borderWidth: 2, borderColor: 'white', width: '100%', height: 30, backgroundColor: 'rgb(74 222 128)' }}>
      <Text className=" text-6xl text-green-400">{characterhp.hp}</Text>
    </View>

  
  );
};

export default PlayerHP;
