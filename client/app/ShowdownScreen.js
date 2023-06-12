import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation, Link } from "expo-router";
import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import GlobalStyles from "../GlobalStyles";
import { Button, Overlay } from "@rneui/themed";
import { Bars3Icon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../components/PlayerBox/Player";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AbilitySelect from "../components/Overlays/AbilitySelect";
import FaceOffScreen from "../components/Overlays/FaceOffScreen";
import EndScreen from "../components/Overlays/EndScreen";
// Have to account for tie

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

  // this is now on the slector comp
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
    toggleFaceOffOverlay();
    setTimeout(() => {
      toggleAbilityOverlayp1();
    }, 2000);
  };

  const onp1AbilityPressHandle = () => {
    if (selectedAttackIndexP1 !== null || selectedDefenseIndexP1 !== null) {
      toggleAbilityOverlayp1();
      toggleAbilityOverlayp2();
    } else {
      alert("Please select an attack or a defence!");
    }
    // P1 selected ability
  };

  const onp2AbilityPressHandle = () => {
    if (selectedAttackIndexP2 !== null || selectedDefenseIndexP2 !== null) {
      handleDamage();
      toggleAbilityOverlayp2();
    } else {
      alert("Please select an attack or a defence!");
    }
  };

  const handleDamage = () => {
    const copyCharacterData = { ...characterData };
    const copySecondCharacterData = { ...secondCharacterData };
    if (abilityp2.value < 0) {
      copyCharacterData.hp = characterData.hp + abilityp2.value;
    } else {
      copySecondCharacterData.hp = secondCharacterData.hp + abilityp2.value;
    }

    if (abilityp1.value < 0) {
      copySecondCharacterData.hp = copySecondCharacterData.hp + abilityp1.value;
    } else {
      copyCharacterData.hp = copyCharacterData.hp + abilityp1.value;
    }

    if (copyCharacterData.hp >= 100) {
      copyCharacterData.hp = 100;
    }

    if (copySecondCharacterData.hp >= 100) {
      copySecondCharacterData.hp = 100;
    }
    setCharacterData(copyCharacterData);
    setSecondCharacterData(copySecondCharacterData);
    if (copyCharacterData.hp <= 0 || copySecondCharacterData.hp <= 0) {
      toggleEndScreenOverlay();
    } else {
      setTimeout(() => {
        toggleAbilityOverlayp1();
      }, 2000);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/terminalimg.jpg")}
      style={{ flex: 1 }}
    >
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
          supportedOrientations={["landscape"]}
        >
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
        <AbilitySelect
          title={"P1: Choose your Ability"}
          overlayWidth={overlayWidth}
          overlayHeight={overlayHeight}
          abilityvisible={abilityvisiblep1}
          characterData={characterData}
          selectedAttackIndex={selectedAttackIndexP1}
          selectedDefenseIndex={selectedDefenseIndexP1}
          handleDefenseClick={handleDefenseClickP1}
          handleAttackClick={handleAttackClickP1}
          setAbility={setAbilityp1}
          onAbilityPressHandle={onp1AbilityPressHandle}
        />

        <AbilitySelect
          title={"P2: Choose your Ability"}
          overlayWidth={overlayWidth}
          overlayHeight={overlayHeight}
          abilityvisible={abilityvisiblep2}
          characterData={secondCharacterData}
          selectedAttackIndex={selectedAttackIndexP2}
          selectedDefenseIndex={selectedDefenseIndexP2}
          handleDefenseClick={handleDefenseClickP2}
          handleAttackClick={handleAttackClickP2}
          setAbility={setAbilityp2}
          onAbilityPressHandle={onp2AbilityPressHandle}
        />

        {characterData && secondCharacterData ? (
          <FaceOffScreen
            overlayWidth={overlayWidth}
            overlayHeight={overlayHeight}
            faceoffVisible={faceoffVisible}
            characterData={characterData}
            secondCharacterData={secondCharacterData}
            onShowdownPressHandler={onShowdownPressHandler}
          />
        ) : null}

        {characterData && secondCharacterData ? (
          <EndScreen
            overlayWidth={overlayWidth}
            overlayHeight={overlayHeight}
            endScreenVisible={endScreenVisible}
            characterData={characterData}
            secondCharacterData={secondCharacterData}
          />
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
