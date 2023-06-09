import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "expo-router";
import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { Overlay } from "@rneui/themed";
import { Bars3Icon } from "react-native-heroicons/solid";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../components/PlayerBox/Player";
import { FlatList } from "react-native-gesture-handler";
// Add reminder of which turn it is and which player is active

const ShowdownScreen = () => {
  const [characterData, setCharacterData] = useState(null);
  const [secondCharacterData, setSecondCharacterData] = useState(null);

  const fetchData = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(
          "https://syntax-showdown-app.delightfulisland-96df0ba2.uksouth.azurecontainerapps.io/characters/1"
        ),
        fetch(
          "https://syntax-showdown-app.delightfulisland-96df0ba2.uksouth.azurecontainerapps.io/characters/2"
        ),
      ]);

      const [json1, json2] = await Promise.all([
        response1.json(),
        response2.json(),
      ]);

      setCharacterData(json1);
      setSecondCharacterData(json2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      layout: {
        orientation: ["landscape"],
      },
    });
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuOverlay = () => {
    setMenuVisible(!menuVisible);
  };
  const [faceoffVisible, setFaceoffVisible] = useState(true);
  const toggleFaceOffOverlay = () => {
    setFaceoffVisible(!faceoffVisible);
  };

  const [endScreenVisible, setEndScreenVisible] = useState(false);
  const toggleEndScreenOverlay = () => {
    setEndScreenVisible(!endScreenVisible);
  };

  const { width, height } = Dimensions.get("window");
  const overlayWidth = width;
  const overlayHeight = height;

  const [abilityvisiblep1, setAbilityVisiblep1] = useState(false);
  const toggleAbilityOverlayp1 = () => {
    setAbilityVisiblep1(!abilityvisiblep1);
  };

  const [abilityvisiblep2, setAbilityVisiblep2] = useState(false);
  const toggleAbilityOverlayp2 = () => {
    setAbilityVisiblep2(!abilityvisiblep2);
  };

  const onShowdownPressHandler = () => {
    toggleFaceOffOverlay(), toggleAbilityOverlayp1();
  };

  const endScreenHandler = () => {
    const copy = { ...characterData };
    copy.hp = 0;
    setCharacterData(copy);
  };

  const onp1AbilityPressHandle = () => {
    toggleAbilityOverlayp1(), toggleAbilityOverlayp2();
  };

  return (
    <ImageBackground
      source={require("../assets/terminalimg.jpg")}
      style={{ flex: 1 }}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View className="absolute top-5 right-5">
          <TouchableOpacity onPress={toggleMenuOverlay}>
            <Bars3Icon size={50} color="rgb(74 222 128)"></Bars3Icon>
          </TouchableOpacity>
        </View>

        <Overlay
          overlayStyle={{
            backgroundColor: "rgb(74 222 128)",
            alignItems: "center",
            width: 300,
          }}
          isVisible={menuVisible}
          animationType="fade"
          supportedOrientations={["landscape"]}>
          <View className="border-solid border-black border-2 m-5">
            <Button
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
              title={"resume"}
              onPress={toggleMenuOverlay}
            />
          </View>
          <View className="border-solid border-2 border-black m-5">
            <Link href="/" asChild>
              <Button
                color="rgb(74 222 128)"
                titleStyle={{ color: "black", fontFamily: "SyneMono" }}
                title={"ctrl + c (exit)"}
              />
            </Link>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={{
            alignItems: "center",
            width: overlayWidth,
            height: overlayHeight,
            backgroundColor: "rgb(0,0,0)",
          }}
          isVisible={abilityvisiblep1}
          animationType="fade"
          supportedOrientations={["landscape"]}>
          <View className="border-solid border-black border-2 m-5">
            <Button
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
              title={" P1:Choose your Ability"}
            />
            <View className="  bg-green-400 items-center justify-center">
              <Text style={{ fontFamily: "SyneMono" }}>Choose your Attack</Text>
            </View>

            {characterData
              ? characterData.attackList.map((item) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "white" }}
                    color="rgb(229,76,32)"
                    key={item.id}
                    onPress={onp1AbilityPressHandle}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}

            <View className=" bg-green-400 items-center justify-center">
              <Text style={{ fontFamily: "SyneMono" }}>
                Choose your Defence
              </Text>
            </View>

            {characterData
              ? characterData.defenceList.map((item) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "white" }}
                    color="rgb(36,75,221)"
                    key={item.id}
                    onPress={onp1AbilityPressHandle}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}
          </View>
        </Overlay>

        <Overlay
          overlayStyle={{
            alignItems: "center",
            width: overlayWidth,
            height: overlayHeight,
            backgroundColor: "rgb(0,0,0)",
          }}
          isVisible={abilityvisiblep2}
          animationType="fade"
          supportedOrientations={["landscape"]}>
          <View className="border-solid border-black border-2 m-5">
            <Button
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
              title={"P2:Choose your Ability"}
            />

            <View className="  bg-green-400 items-center justify-center">
              <Text style={{ fontFamily: "SyneMono" }}>Choose your Attack</Text>
            </View>

            {secondCharacterData
              ? secondCharacterData.attackList.map((item) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "white" }}
                    color="rgb(229,76,32)"
                    key={item.id}
                    onPress={toggleAbilityOverlayp2}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}

            <View className=" bg-green-400 items-center justify-center">
              <Text style={{ fontFamily: "SyneMono" }}>
                Choose your Defence
              </Text>
            </View>

            {secondCharacterData
              ? secondCharacterData.defenceList.map((item) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "white" }}
                    color="rgb(36,75,221)"
                    key={item.id}
                    onPress={toggleAbilityOverlayp2}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}
          </View>
        </Overlay>
        {characterData && secondCharacterData ? (
        <Overlay
          overlayStyle={{
            alignItems: "center",
            width: overlayWidth,
            height: overlayHeight,
            backgroundColor: "grey",
          }}
          isVisible={faceoffVisible}
          animationType="slide"
          supportedOrientations={["landscape"]}>
          <View className="absolute left-10 bottom-10">
            <Image
              source={{ uri: characterData.imgPath }}
              style={{ width: 250, height: 400 }}
            />
          </View>
          <View className="absolute right-10 bottom-10">
            <Image
              source={{ uri: secondCharacterData.imgPath }}
              style={{ width: 250, height: 400 }}
            />
          </View>
          <View>
            <Image
              source={require("../assets/versus.png")}
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
        ) : null}

        {characterData && secondCharacterData ? (
          <Overlay
            overlayStyle={{
              alignItems: "center",
              width: overlayWidth,
              height: overlayHeight,
              backgroundColor: "rgb(0,0,0)",
            }}
            isVisible={endScreenVisible}
            animationType="slide"
            supportedOrientations={["landscape"]}>
            <Text className="text-white">Winner:</Text>
            {secondCharacterData.hp === 0 ? (
              <Image
                source={{ uri: characterData.imgPath }}
                style={{ width: 200, height: 100 }}
              />
            ) : null}
            {characterData.hp === 0 ? (
              <Image
                source={{ uri: secondCharacterData.imgPath }}
                style={{ width: 200, height: 100 }}
              />
            ) : null}

            <View className="absolute bottom-10">
              <Button
                color="rgb(74 222 128)"
                titleStyle={{
                  color: "black",
                  fontFamily: "SyneMono",
                  fontSize: 20,
                }}
                title={"Kill p2"}
                onPress={endScreenHandler}
              />
              <View className=" flex-column">
                <Link href="/" asChild>
                  <Button
                    color={"rgb(0 0 0)"}
                    titleStyle={{
                      color: "rgb(74 222 128)",
                      fontFamily: "SyneMono",
                      fontSize: 35,
                    }}
                    title={"Title Screen"}
                  />
                </Link>
              </View>
            </View>
          </Overlay>
        ) : null}

        <View className="flex-row">
          {characterData ? <Player character={characterData} /> : null}
          {secondCharacterData ? (
            <Player character={secondCharacterData} />
          ) : null}
        </View>
        <View className=" absolute bottom-10 right-8">
          <Text
            onPress={toggleEndScreenOverlay}
            className="text-white flex-end text-xl">
            Endscreen
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ShowdownScreen;
