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
import { FlatList, ScrollView } from "react-native-gesture-handler";
// Add reminder of which turn it is and which player is active

const ShowdownScreen = () => {
  const [characterData, setCharacterData] = useState(null);
  const [secondCharacterData, setSecondCharacterData] = useState(null);
  const [abilityp1, setAbilityp1] = useState(null);
  const [abilityp2, setAbilityp2] = useState(null);
  const [selectedAttackIndexP1, setSelectedAttackIndexP1] = useState(null);
  const [selectedDefenseIndexP1, setSelectedDefenseIndexP1] = useState(null);
  const [selectedAttackIndexP2, setSelectedAttackIndexP2] = useState(null);
  const [selectedDefenseIndexP2, setSelectedDefenseIndexP2] = useState(null);

  const fetchData = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(
          "https://syntax-showdown-app.delightfulisland-96df0ba2.uksouth.azurecontainerapps.io/characters/1"
        ),
        fetch(
          "https://syntax-showdown-app.delightfulisland-96df0ba2.uksouth.azurecontainerapps.io/characters/4"
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

  const handleAttackClickP1 = (index) => {
    setSelectedAttackIndexP1(index);
    setSelectedDefenseIndexP1(null); // Reset defense selection
    setAbilityp1(characterData.attackList[index]);
  };

  const handleDefenseClickP1 = (index) => {
    setSelectedDefenseIndexP1(index);
    setSelectedAttackIndexP1(null); // Reset attack selection
    setAbilityp1(characterData.defenceList[index]);
  };

  const handleAttackClickP2 = (index) => {
    setSelectedAttackIndexP2(index);
    setSelectedDefenseIndexP2(null); // Reset defense selection
    setAbilityp2(secondCharacterData.attackList[index]);
  };

  const handleDefenseClickP2 = (index) => {
    setSelectedDefenseIndexP2(index);
    setSelectedAttackIndexP2(null); // Reset attack selection
    setAbilityp2(secondCharacterData.defenceList[index]);
  };

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
    toggleFaceOffOverlay()
    setTimeout(() => {toggleAbilityOverlayp1()}, 2000)
  };

  const endScreenHandler = () => {
    const copy = { ...characterData };
    copy.hp = 0;
    setCharacterData(copy);
  };

  const onp1AbilityPressHandle = () => {
    toggleAbilityOverlayp1(), toggleAbilityOverlayp2();
    // P1 selected ability
  };

  const onp2AbilityPressHandle = () => {
    handleDamage();
    toggleAbilityOverlayp2();
  };

  const handleDamage = () => {
    const copyCharacterData = { ...characterData };
    const copySecondCharacterData = { ...secondCharacterData };
    if (abilityp2.value < 0) {
      copyCharacterData.hp = characterData.hp + abilityp2.value;
    } else {
      copySecondCharacterData.hp = secondCharacterData.hp + abilityp2.value
    }
  
    if (abilityp1.value < 0) {
      copySecondCharacterData.hp = copySecondCharacterData.hp + abilityp1.value;
    } else {
      copyCharacterData.hp = copyCharacterData.hp + abilityp1.value;
    }
    setCharacterData(copyCharacterData);
    setSecondCharacterData(copySecondCharacterData);
    if (copyCharacterData.hp <= 0 || copySecondCharacterData.hp <=0 ){
      toggleEndScreenOverlay()
    } else {
    setTimeout(() => {toggleAbilityOverlayp1()}, 2000)
    }
    
  }

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
            backgroundColor: "bg-opacity-50",
          }}
          isVisible={abilityvisiblep1}
          animationType="fade"
          supportedOrientations={["landscape"]}>
          <View className=" bg-green-400 border-solid border-black border-2 m-5">
            <View className="items-center justify-center">
              <Text style={{ color: "black", fontFamily: "SyneMono" }}>
                P1:Choose your Ability
              </Text>
            </View>
            <View
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
            />
            <View className=" bg-black items-center justify-center">
              <Text style={{ color: "white", fontFamily: "SyneMono" }}>Choose your Attack</Text>
            </View>

            {characterData
              ? characterData.attackList.map((item, index) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "black" }}
                    color={
                      selectedAttackIndexP1 === index
                        ? "rgb(74 222 128)"
                        : "rgb(240,3,1)"
                    }
                    key={item.id}
                    onPress={() => {
                      handleDefenseClickP1(index);
                      handleAttackClickP1(index);
                      setAbilityp1(item);
                    }}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}

            <View className=" bg-black items-center justify-center">
              <Text style={{ color: "white", fontFamily: "SyneMono" }}>
                Choose your Defence
              </Text>
            </View>

            {characterData
              ? characterData.defenceList.map((item, index) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "black" }}
                    color={
                      selectedDefenseIndexP1 === index
                        ? "rgb(74 222 128)"
                        : "rgb(36, 75, 221)"
                    }
                    key={item.id}
                    onPress={() => {
                      handleAttackClickP1(index);
                      handleDefenseClickP1(index);
                      setAbilityp1(item);
                    }}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}
          </View>
          <View>
          <Button
              style={{ borderWidth: 2, borderColor: "rgb(74 222 128)" }}
              color="black"
              onPress={() => {
                onp1AbilityPressHandle();
              }}>
              <Text className="text-white" style={{ fontSize:25, fontFamily: "SyneMono" }}>
                Finish Turn
              </Text>
            </Button>
          </View>
        </Overlay>

        <Overlay
          overlayStyle={{
            alignItems: "center",
            width: overlayWidth,
            height: overlayHeight,
            backgroundColor: "bg-opacity-50",
          }}
          isVisible={abilityvisiblep2}
          animationType="fade"
          supportedOrientations={["landscape"]}>
          <View className=" bg-green-400 border-solid border-black border-2 m-5" >
            <View className="items-center justify-center">
              <Text style={{ color: "black", fontFamily: "SyneMono" }}>
                P2:Choose your Ability
              </Text>
            </View>
            <View
              color="rgb(74 222 128)"
              titleStyle={{ color: "black", fontFamily: "SyneMono" }}
              title={"P2:Choose your Ability"}
            />

            <View className="  bg-black items-center justify-center">
              <Text style={{ color: "white", fontFamily: "SyneMono" }}>Choose your Attack</Text>
            </View>

            {secondCharacterData
              ? secondCharacterData.attackList.map((item, index) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "black" }}
                    color={
                      selectedAttackIndexP2 === index
                        ? "rgb(74 222 128)"
                        : "rgb(240,3,1)"
                    }
                    key={item.id}
                    onPress={() => {
                      handleDefenseClickP2(index);
                      handleAttackClickP2(index);
                      setAbilityp2(item);
                    }}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}

            <View className=" bg-black items-center justify-center">
              <Text style={{ color: "white",fontFamily: "SyneMono" }}>
                Choose your Defence
              </Text>
            </View>

            {secondCharacterData
              ? secondCharacterData.defenceList.map((item, index) => (
                  <Button
                    style={{ borderWidth: 2, borderColor: "black" }}
                    color={
                      selectedDefenseIndexP2 === index
                        ? "rgb(74 222 128)"
                        : "rgb(36, 75, 221)"
                    }
                    key={item.id}
                    onPress={() => {
                      handleAttackClickP2(index);
                      handleDefenseClickP2(index);
                      setAbilityp2(item);
                    }}>
                    <Text
                      className="text-white"
                      style={{ fontFamily: "SyneMono" }}>
                      {item.name}
                    </Text>
                  </Button>
                ))
              : null}
          </View>
          <View>
          <Button
              style={{ borderWidth: 2, borderColor: "rgb(74 222 128)" }}
              color="black"
              onPress={() => {
                onp2AbilityPressHandle();
              }}>
              <Text className="text-white" style={{ fontSize: 25, fontFamily: "SyneMono" }}>
                Finish Turn
              </Text>
            </Button>
            </View>
        </Overlay>
        {characterData && secondCharacterData ? (
          <Overlay
            overlayStyle={{
              alignItems: "center",
              width: overlayWidth,
              height: overlayHeight,
              backgroundColor: "white",
            }}
            isVisible={faceoffVisible}
            animationType="slide"
            supportedOrientations={["landscape"]}>
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
                className="text-5xl italic font-semibold">
                {characterData.name}
              </Text>
            </View>
            <View className="absolute right-32 bottom-10">
              <Text
                style={{ fontFamily: "SyneMono" }}
                className="text-5xl italic font-semibold">
                {secondCharacterData.name}
              </Text>
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
              justifyContent:"space-between",
              flexDirection: "column",
              alignItems: "center",
              width: overlayWidth,
              height: overlayHeight,
              backgroundColor: "rgb(0,0,0)",
            }}
            isVisible={endScreenVisible}
            animationType="slide"
            supportedOrientations={["landscape"]}>
            <Text className="text-white">Winner:</Text>
            {secondCharacterData.hp <= 0 && secondCharacterData.hp < characterData.hp ? (
              <Image
                source={{ uri: characterData.imgPath }}
                style={{ width: 200, height: 100 }}
              />
            ) : null}
            {characterData.hp <= 0 && characterData.hp < secondCharacterData.hp ? (
              <Image
                source={{ uri: secondCharacterData.imgPath }}
                style={{ width: 200, height: 100 }}
              />
            ) : null}

              <View>
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
          </Overlay>
        ) : null}

        <View style="flex: 1; justify-content: flex-end" className="flex-row">
          {characterData ? <Player character={characterData} /> : null}
          {secondCharacterData ? (
            <Player character={secondCharacterData} />
          ) : null}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ShowdownScreen;
