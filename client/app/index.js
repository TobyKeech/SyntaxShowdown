import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { InformationCircleIcon } from "react-native-heroicons/solid";
import { Overlay } from "@rneui/themed";

const index = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View className="bg-black" style={GlobalStyles.droidSafeArea}>
      {/* <View className="absolute top-5 right-8 flex items-center justify-center w-8 h-8 rounded-full border border-green-400"> */}
      {/* <Text className="text-green-400 text-2xl">i</Text> */}
      <View className="flex-row justify-end mr-5">
        <InformationCircleIcon size={50} color="green" />
      </View>
      {/* </View> */}

      <View className="items-center justify-center absolute left-0 right-0 top-0 bottom-0">
        <TouchableOpacity onPress={toggleOverlay}>
          <Text className="text-green-400 text-4xl p-10">syntax_showdown</Text>
        </TouchableOpacity>
        <View className="p-10 flex-row">
          <Button color="rgb(74 222 128)" titleStyle={{ color: "black" }}>
          <Link rel="stylesheet" href="/ShowdownScreen">npm start</Link>
          </Button>
        </View>

        <Overlay overlayStyle={{backgroundColor: "rgb(74 222 128)", alignItems: "center", width: 400}} isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text className="mb-5">Showdown!</Text>
          <Text>This is going to be the info menu with all the information about how to play this game.</Text>
        </Overlay>
      </View>
    </View>
  );
};

export default index;
