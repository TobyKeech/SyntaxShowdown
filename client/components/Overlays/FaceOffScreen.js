import { View, Text, Image } from "react-native";
import React from "react";
import { Overlay, Button } from "@rneui/themed";

const FaceOffScreen = ({
  faceoffVisible,
  characterData,
  secondCharacterData,
  onShowdownPressHandler,
}) => {
  return (
    <Overlay
      overlayStyle={{
        alignItems: "center",
        backgroundColor: "(74 222 128)",
      }}
      isVisible={faceoffVisible}
      animationType="slide"
      supportedOrientations={["landscape"]}
      fullScreen={true}
      statusBarTranslucent={true}
    >
    
      <View className="absolute left-8 bottom-20">
        <Image
          source={{ uri: characterData.imgPath }}
          style={{ width: 260, height: 320 }}
        />
      </View>
      <View className="absolute right-8 bottom-20">
        <Image
          source={{ uri: secondCharacterData.imgPath }}
          style={{ width: 260, height: 320 }}
        />
      </View>
      <View className="absolute left-24 bottom-12">
        <Text
          style={{ fontFamily: "SyneMono" }}
          className="text-4xl text-green-400 italic font-semibold"
        >
          {characterData.name}
        </Text>
      </View>
      <View className="absolute right-24 bottom-10">
        <Text
          style={{ fontFamily: "SyneMono" }}
          className="text-4xl text-green-400 italic font-semibold"
        >
          {secondCharacterData.name}
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/versus.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View className="absolute bottom-10">
        <Button
          color="rgb(74 222 128)"
          titleStyle={{
            color: "black",
            fontFamily: "SyneMono",
            fontSize: 30,
          }}
          title={"Showdown!"}
          onPress={onShowdownPressHandler}
        />
      </View>
    </Overlay>
  );
};

export default FaceOffScreen;
