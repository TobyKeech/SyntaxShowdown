import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { Overlay, Button } from "@rneui/themed";
import { Link } from "expo-router";

const EndScreen = ({
  endScreenVisible,
  characterData,
  secondCharacterData,
}) => {
  return (
    <Overlay
      overlayStyle={{
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "(74 222 128)",
      }}
      isVisible={endScreenVisible}
      animationType="slide"
      supportedOrientations={["landscape"]}
      statusBarTranslucent={true}
      fullScreen = {true}
    >
    <StatusBar hidden={true} />
      <Text
        style={{ fontSize: 30, fontFamily: "SyneMono" }}
        className="text-green-400"
      >
        Winner:
      </Text>
      {secondCharacterData.hp <= 0 &&
      secondCharacterData.hp < characterData.hp ? (
        <Image
          source={{ uri: characterData.imgPath }}
          style={{ width: 300, height: 200 }}
        />
      ) : null}
      {characterData.hp <= 0 && characterData.hp < secondCharacterData.hp ? (
        <Image
          source={{ uri: secondCharacterData.imgPath }}
          style={{ width: 300, height: 200 }}
        />
      ) : null}

      <View className="p-10 pt-22 flex-column">
        <Link href="/" asChild>
          <Button
            color={"rgb(74 222 128)"}
            titleStyle={{
              color: "white",
              fontFamily: "SyneMono",
              fontSize: 29,
            }}
            title={"Main menu"}
          />
        </Link>
      </View>
    </Overlay>
  );
};

export default EndScreen;
