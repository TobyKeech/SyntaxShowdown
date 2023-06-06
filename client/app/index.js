import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  SafeAreaView
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { useLayoutEffect, useState, useCallback } from "react";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { InformationCircleIcon } from "react-native-heroicons/solid";
import { Overlay } from "@rneui/themed";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const [fontsLoaded] = useFonts({
    SyneMono: require("../assets/fonts/SyneMono-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      layout: {
        orientation: ["landscape"],
      },
    });
  }, []);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      className="bg-black"
      style={GlobalStyles.droidSafeArea}
      onLayout={onLayoutRootView}>
      <View className="flex-row justify-end mr-5">
        <InformationCircleIcon size={50} color="rgb(74 222 128)" />
      </View>

      <View className="items-center justify-center absolute left-0 right-0 top-0 bottom-0">
        <TouchableOpacity onPress={toggleOverlay}>
          <Text
            className="text-green-400 text-5xl p-10"
            style={{ fontFamily: "SyneMono" }}>
            syntax_showdown
          </Text>
        </TouchableOpacity>
        <View className="p-10 flex-column">
          <Link href="/ShowdownScreen" asChild>
            <Button
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
              title={"npm start"}
            />
          </Link>
          <Link href="/Fetch" asChild>
            <Button
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
              title={"to fetch"}
            />
          </Link>
        </View>

        <Overlay
          overlayStyle={{
            backgroundColor: "rgb(74 222 128)",
            alignItems: "center",
            width: 400,
          }}
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          animationType="fade"
          supportedOrientations={["landscape"]}>
          <Text className="mb-5">Showdown!</Text>
          <Text>
            This is going to be the info menu with all the information about how
            to play this game.
          </Text>
        </Overlay>
      </View>
    </SafeAreaView>
  );
};

export default Index;
