import { View, Text } from "react-native";
import React from "react";

const PlayerHP = ({ characterhp }) => {

  const maxHP = 100; // Assuming maximum HP is 100

  const healthPercentage = (characterhp.hp / maxHP) * 100;
  const healthBarWidth = `${healthPercentage}%`;

  return (
    <View style={{ borderWidth: 2, borderColor: 'white', width: '100%', height: 30, backgroundColor: 'rgb(74 222 128)' }}>
      <View style={{ width: healthBarWidth, height: '100%', backgroundColor: 'rgb(74 222 128)' }} />

      {/* the belwo code is the characterhp health which you display directly as the hp */}
      {/* <Text className=" text-6xl text-green-400">{characterhp.hp}</Text> */}
    </View>
  );
};

export default PlayerHP;
