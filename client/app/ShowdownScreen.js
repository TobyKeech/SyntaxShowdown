import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
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
import { color } from "@rneui/base";
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
  const [lastVisibleScreen, setLastVisibleScreen] = useState(null);
  const [damageP1Visible, setDamageP1Visible] = useState(false);
  const [healP1Visible, setHealP1Visible] = useState(false);
  const [damageP2Visible, setDamageP2Visible] = useState(false);
  const [healP2Visible, setHealP2Visible] = useState(false);
  const [calculatedDamageP1, setCalculatedDamageP1] = useState(0);
  const [calculatedHealP1, setCalculatedHealP1] = useState(0);
  const [calculatedDamageP2, setCalculatedDamageP2] = useState(0);
  const [calculatedHealP2, setCalculatedHealP2] = useState(0);

  const fetchData = async () => {
    let firstPlayer = Math.floor(Math.random() * 9) + 1;
    let secondPlayer = Math.floor(Math.random() * 9) + 1;
    while (secondPlayer === firstPlayer) {
      secondPlayer = Math.floor(Math.random() * 9) + 1;
    }

    try {
      const [response1, response2] = await Promise.all([
        fetch(
          `https://syntax-showdown-app.delightfulisland-96df0ba2.uksouth.azurecontainerapps.io/characters/${firstPlayer}`
        ),
        fetch(
          `https://syntax-showdown-app.delightfulisland-96df0ba2.uksouth.azurecontainerapps.io/characters/${secondPlayer}`
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
    if (abilityvisiblep1 === true) {
      setLastVisibleScreen(1);
      toggleAbilityOverlayp1();
    } else if (abilityvisiblep2 === true) {
      setLastVisibleScreen(2);
      toggleAbilityOverlayp2();
    }
    if (lastVisibleScreen === 1) {
      toggleAbilityOverlayp1();
      setLastVisibleScreen(null);
    } else if (lastVisibleScreen === 2) {
      toggleAbilityOverlayp2();
      setLastVisibleScreen(null);
    }
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

  const [abilityvisiblep1, setAbilityVisiblep1] = useState(false);
  const toggleAbilityOverlayp1 = () => {
    setAbilityVisiblep1(!abilityvisiblep1);
  };

  const [abilityvisiblep2, setAbilityVisiblep2] = useState(false);
  const toggleAbilityOverlayp2 = () => {
    setAbilityVisiblep2(!abilityvisiblep2);
  };

  const [showdownLogVisible, setShowdownLogVisible] = useState(false);
  const toggleShowdownLog = () => {
    setShowdownLogVisible(!showdownLogVisible);
  };

  const onNextRoundButtonPressHandler = () => {
    toggleShowdownLog();
    setTimeout(() => {
      toggleAbilityOverlayp1();
    }, 1500);
    setDamageP1Visible(false);
    setDamageP2Visible(false);
    setHealP1Visible(false);
    setHealP2Visible(false);
    setCalculatedDamageP1(0);
    setCalculatedDamageP2(0);
    setCalculatedHealP1(0);
    setCalculatedHealP2(0);
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
  };

  const onp2AbilityPressHandle = () => {
    if (selectedAttackIndexP2 !== null || selectedDefenseIndexP2 !== null) {
      handleDamage();
      toggleAbilityOverlayp2();
      toggleShowdownLog();
    } else {
      alert("Please select an attack or a defence!");
    }
  };

  const handleDamage = () => {
    const copyCharacterData = { ...characterData };
    const copySecondCharacterData = { ...secondCharacterData };
    if (abilityp2.value < 0) {
      let hitChance;
      if (abilityp2.value === -30) {
        hitChance = Math.random() < 0.75 ? 0 : 1;
      } else {
        hitChance = Math.random() < 0.25 ? 0 : 1;
      }
      const damageP1 = Math.ceil(
        hitChance * abilityp2.value * (Math.random() * 1.5 + 0.5)
      );
      setCalculatedDamageP1(damageP1);
      setDamageP1Visible(true);
      copyCharacterData.hp = copyCharacterData.hp + damageP1 
      setCharacterData(copyCharacterData);
    } else {
      let defenceChance;
      if (abilityp2.value === 30) {
        defenceChance = Math.random() < 0.75 ? 0 : 1;
      } else {
        defenceChance = Math.random() < 0.25 ? 0 : 1;
      }
      const healP2 = Math.ceil(
        defenceChance * abilityp2.value * (Math.random() * 1.5 + 0.5)
      );
      setCalculatedHealP2(healP2);
      setHealP2Visible(true);
      copySecondCharacterData.hp = copySecondCharacterData.hp + healP2 
      setSecondCharacterData(copySecondCharacterData);
    }

    if (abilityp1.value < 0) {
      let hitChance;
      if (abilityp1.value === -30) {
        hitChance = Math.random() < 0.75 ? 0 : 1;
      } else {
        hitChance = Math.random() < 0.25 ? 0 : 1;
      }
      const damageP2 = Math.ceil(
        hitChance * abilityp1.value * (Math.random() * 1.5 + 0.5)
      );
      setCalculatedDamageP2(damageP2);
      setDamageP2Visible(true);
      copySecondCharacterData.hp = copySecondCharacterData.hp + damageP2
      setSecondCharacterData(copySecondCharacterData);
    } else {
      let defenceChance;
      if (abilityp2.value === 30) {
        defenceChance = Math.random() < 0.75 ? 0 : 1;
      } else {
        defenceChance = Math.random() < 0.25 ? 0 : 1;
      }
      const healP1 = Math.ceil(
        defenceChance * abilityp1.value * (Math.random() * 1.5 + 0.5)
      );
      setCalculatedHealP1(healP1);
      setHealP1Visible(true);
      copyCharacterData.hp = copyCharacterData.hp + healP1 
      setCharacterData(copyCharacterData);
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
      toggleShowdownLog();
    }
  };

  return (
    <ImageBackground
      source={require("../assets/terminalnewgif.gif")}
      style={{ flex: 1 }}>
      <SafeAreaView>
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
        
        <AbilitySelect
          title={
            <Text
              style={{
                fontSize: 20,
                fontFamily: "SyneMono",
                fontWeight: "bold",
              }}>
             P1: Choose your Ability
            </Text>
          }
          abilityvisible={abilityvisiblep1}
          characterData={characterData}
          selectedAttackIndex={selectedAttackIndexP1}
          selectedDefenseIndex={selectedDefenseIndexP1}
          handleDefenseClick={handleDefenseClickP1}
          handleAttackClick={handleAttackClickP1}
          setAbility={setAbilityp1}
          onAbilityPressHandle={onp1AbilityPressHandle}
          toggleMenuOverlay={toggleMenuOverlay}
        />

        <AbilitySelect
          title={
            <Text
              style={{
                fontSize: 20,
                fontFamily: "SyneMono",
                fontWeight: "bold",
              }}>
              P2: Choose your Ability
            </Text>
          }
          abilityvisible={abilityvisiblep2}
          characterData={secondCharacterData}
          selectedAttackIndex={selectedAttackIndexP2}
          selectedDefenseIndex={selectedDefenseIndexP2}
          handleDefenseClick={handleDefenseClickP2}
          handleAttackClick={handleAttackClickP2}
          setAbility={setAbilityp2}
          onAbilityPressHandle={onp2AbilityPressHandle}
          toggleMenuOverlay={toggleMenuOverlay}
        />

        {characterData && secondCharacterData ? (
          <FaceOffScreen
            faceoffVisible={faceoffVisible}
            characterData={characterData}
            secondCharacterData={secondCharacterData}
            onShowdownPressHandler={onShowdownPressHandler}
          />
        ) : null}

        {characterData && secondCharacterData ? (
          <EndScreen
            endScreenVisible={endScreenVisible}
            characterData={characterData}
            secondCharacterData={secondCharacterData}
          />
        ) : null}
        <View className="flex-row">
          {characterData && !faceoffVisible && !endScreenVisible ? (
            <Player character={characterData} key={characterData.id} />
          ) : null}
          {secondCharacterData && !faceoffVisible && !endScreenVisible ? (
            <Player
              character={secondCharacterData}
              key={secondCharacterData.id}
            />
          ) : null}
        </View>
        {characterData && secondCharacterData ? (
  <Overlay
    overlayStyle={{
      backgroundColor: "(74 222 128)",
      alignItems: "center",
      width: 620,
      height: 260,
    }}
    isVisible={showdownLogVisible}
    supportedOrientations={["landscape"]}
  >
    {damageP2Visible && (
      <View style={{ borderWidth: 3, borderColor: 'rgb(74 222 128)', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 10,  margin: 10}}>
        <Text style={{ fontFamily: "SyneMono", color: "white" }} className="text-2xl">
          {characterData.name} attacked {secondCharacterData.name} for{" "}
          {Math.abs(calculatedDamageP2)} damage!
        </Text>
      </View>
    )}

    {healP1Visible && (
      <View style={{ borderWidth: 3, borderColor: 'rgb(74 222 128)', backgroundColor: 'rgba(0, 0, 0, 0.4)',padding: 10,  margin: 10}}>
        <Text style={{ fontFamily: "SyneMono", color: "white" }} className="text-green-400 text-2xl">
          {characterData.name} healed {calculatedHealP1} HP!
        </Text>
      </View>
    )}

    {damageP1Visible && (
      <View style={{ borderWidth: 3, borderColor: 'rgb(74 222 128)', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 10,  margin: 10}}>
        <Text style={{ fontFamily: "SyneMono", color: "white" }} className="text-green-400 text-2xl">
          {secondCharacterData.name} attacked {characterData.name} for{" "}
          {Math.abs(calculatedDamageP1)} damage!
        </Text>
      </View>
    )}

    {healP2Visible && (
      <View style={{ borderWidth: 3, borderColor: 'rgb(74 222 128)', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 10, margin: 10}}>
        <Text style={{ fontFamily: "SyneMono", color: "white" }} className="text-green-400 text-2xl">
          {secondCharacterData.name} healed {calculatedHealP2} HP!
        </Text>
      </View>
    )}

    <Button
      onPress={onNextRoundButtonPressHandler}
      title={"Next Round -->"}
      titleStyle={{ color: "black", fontFamily: "SyneMono" }}
      color={"rgb(74 222 128)"}
    />
  </Overlay>
) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ShowdownScreen;
