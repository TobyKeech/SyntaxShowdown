import { View, Text, Image } from "react-native";
import React from "react";
import PlayerHP from "./PlayerHP";
import { SafeAreaView } from "react-native-safe-area-context";

const Player = ({ character }) => {

  console.log(character)

  return (
    <SafeAreaView>

      <Image
        source={{ uri: character.imgPath }}
        style={{ width: 300, height: 290 }}
      />

      <View className="items-center justify-center" >
        <Text style={{ alignItems: "center", fontFamily: "SyneMono" }} className=" text-white text-3xl">{character.name}</Text>
      </View>

      <View style="flex: 1; justify-content: flex-end" >
        <PlayerHP characterhp={character} />
      </View>

    </SafeAreaView>
  );
};

export default Player;
