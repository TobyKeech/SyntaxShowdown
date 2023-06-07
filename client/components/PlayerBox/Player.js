import { View, Text, Image } from "react-native";
import React from "react";
import PlayerHP from "./PlayerHP";
import { SafeAreaView } from "react-native-safe-area-context";

const Player = ({ character }) => {
  console.log("CHARACTER:", character);
  console.log(character.imgPath);
  const characterimg = "../../assets/html.png";

  return (
    <SafeAreaView>
      <View>
        <Text className="text-white text-5xl pb-5">{character.name}</Text>
      </View>

      <Image
        source={require(characterimg)}
        style={{ width: 100, height: 100 }}
      />

      <View>
        <PlayerHP characterhp={character} />
      </View>
    </SafeAreaView>
  );
};

export default Player;
