import { View, Text, Image } from "react-native";
import React from "react";
import PlayerHP from "./PlayerHP";
import { SafeAreaView } from "react-native-safe-area-context";

const Player = ({ character}) => {

  return (
    <SafeAreaView>
      <View>
        <Text className=" text-green-400 text-3xl">{character.name}</Text>
      </View>

      <Image
        source={{ uri: character.imgPath }}
        style={{ width: 200, height: 100 }}
      />


      <View>
        <PlayerHP characterhp={character} />
      </View>
    </SafeAreaView>
  );
};

export default Player;
