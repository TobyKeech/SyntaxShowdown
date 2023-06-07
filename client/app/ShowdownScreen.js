import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  ImageBackground,
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
// Add reminder of which turn it is and which player is active

const ShowdownScreen = () => {

  const [characterData, setCharacterData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch("http://172.20.10.4:8080/characters/1");
      const json = await response.json();
      console.log("I was here")
      setCharacterData(json);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(characterData)

  useEffect(() => {
    console.log("I was a massive stud")
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

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };



  return (
    <ImageBackground source={require('../assets/google.png')}>
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View className="absolute top-5 right-5">
        <TouchableOpacity onPress={toggleOverlay}>
          <Bars3Icon size={50} color="rgb(74 222 128)"></Bars3Icon>
        </TouchableOpacity>
      </View>
      
      <Overlay
        overlayStyle={{
          backgroundColor: "rgb(74 222 128)",
          alignItems: "center",
          width: 300,
        }}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        animationType="fade"
        supportedOrientations={["landscape"]}>
        <View className="border-solid border-black border-2 m-5">
        <Button
          color="rgb(74 222 128)"
          titleStyle={{ color: "black", fontFamily: "SyneMono" }}
          title={"resume"}
          onPress={toggleOverlay}
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
      <View>
     
       {characterData ? <Player character={characterData} /> : null}

    </View>
      {/* <Player /> */}
    </SafeAreaView>
    </ImageBackground>
  );
};

export default ShowdownScreen;
