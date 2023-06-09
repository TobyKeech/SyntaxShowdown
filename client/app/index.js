import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  ScrollView,
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
import { Icon } from "@rneui/themed";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
// We could replace the splashscreen to a proper one

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
    <ImageBackground
      source={require("../assets/terminalnewgif.gif")}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={GlobalStyles.droidSafeArea}
        onLayout={onLayoutRootView}
      >
        <View className="items-end mr-5">
          <Icon
            size={50}
            name="information-circle-sharp"
            type="ionicon"
            color="rgb(74 222 128)"
            onPress={toggleOverlay}
          />
          <StatusBar hidden={true} />
        </View>

        <View className="items-center justify-center">
          <View className="bg-black  p-2">
            <Text
              className="text-green-400 text-6xl p-1"
              style={{ fontFamily: "SyneMono" }}
            >
              syntax_showdown
            </Text>
          </View>

          <View className="p-10 pt-20 flex-column">
            <Link href="/ShowdownScreen" asChild>
              <Button
                color={"rgb(74 222 128)"}
                titleStyle={{
                  color: "black",
                  fontFamily: "SyneMono",
                  fontSize: 35,
                }}
                title={"npm start"}
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
            supportedOrientations={["landscape"]}
          >
            <Text style={{ fontFamily: "SyneMono" }} className="mb-5">
              Welcome to syntax showdown
            </Text>
            <Text
              style={{ fontFamily: "SyneMono", textAlign: "center" }}
              className="mb-5"
            >
              This is a turn based battle game where two players will take on a
              programming language and fight to the death. 
            </Text>
            <Text
              style={{ fontFamily: "SyneMono", textAlign: "center" }}
              className="mb-5"
            >

              Heavy attacks/defences have a 25% chance to hit but light attacks/defences are more reliable at 75%. 
              There is also a random ability multiplier between 0.5-1%.

            </Text>
            <Text
              style={{ fontFamily: "SyneMono", textAlign: "center" }}
              className="mb-5"
            >
              You have two attacks and two defences per language.
            </Text>
            <Text
              style={{ fontFamily: "SyneMono", textAlign: "center" }}
              className="mb-5"
            >
              Choose your abilities carefully to defeat your opponent and emerge victorious.
              
            </Text>
          </Overlay>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Index;
