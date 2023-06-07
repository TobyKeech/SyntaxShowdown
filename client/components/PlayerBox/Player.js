import { View, Text, Image } from "react-native";
import React from "react";
import PlayerHP from "./PlayerHP";
import { SafeAreaView } from "react-native-safe-area-context";

const Player = ({ character }) => {
  console.log("CHARACTER:", character);
  console.log(character.imgPath);
  const characterimg = `${character.imgPath}`;
  console.log(characterimg);
  const characterimg2= "../../assets/html.png"


  return (
    <SafeAreaView>
      <View>
        <Text className="text-white text-5xl pb-5">{character.name}</Text>
      </View>

      <Image
        source={{uri: "https://i.ibb.co/xq05jfj/html.png"}}
        style={{ width: 100, height: 100 }}
      />

      <View>
        <PlayerHP characterhp={character} />
      </View>
    </SafeAreaView>
  );
};

export default Player;
