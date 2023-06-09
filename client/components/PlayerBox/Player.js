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
        style={{ width: 250, height: 250 }}
      />

      <View>
        <Text className=" text-white text-3xl">{character.name}</Text>
      </View>


      <View style="flex: 1; justify-content: flex-end" >
        <PlayerHP characterhp={character} />
      </View>

    </SafeAreaView>
  );
};

export default Player;
