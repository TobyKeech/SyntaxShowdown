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
        backgroundColor: "white",
      }}
      isVisible={faceoffVisible}
      animationType="slide"
      supportedOrientations={["landscape"]}
      fullScreen={true}
      statusBarTranslucent={true}
    >
    
      <View className="absolute left-10 bottom-20">
        <Image
          source={{ uri: characterData.imgPath }}
          style={{ width: 250, height: 380 }}
        />
      </View>
      <View className="absolute right-10 bottom-20">
        <Image
          source={{ uri: secondCharacterData.imgPath }}
          style={{ width: 250, height: 380 }}
        />
      </View>
      <View className="absolute left-24 bottom-10">
        <Text
          style={{ fontFamily: "SyneMono" }}
          className="text-5xl italic font-semibold"
        >
          {characterData.name}
        </Text>
      </View>
      <View className="absolute right-32 bottom-10">
        <Text
          style={{ fontFamily: "SyneMono" }}
          className="text-5xl italic font-semibold"
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
            fontSize: 40,
          }}
          title={"Showdown!"}
          onPress={onShowdownPressHandler}
        />
      </View>
    </Overlay>
  );
};

export default FaceOffScreen;
