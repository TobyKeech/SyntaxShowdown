import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import React from "react";
import Hello from "../components/Hello";
import GlobalStyles from "../GlobalStyles";
import { Button } from '@rneui/themed';
import {
    InformationCircleIcon
  } from "react-native-heroicons/solid";
import Ruby from "../assets/ruby.svg"
import { Svg, SvgUri, Image } from "react-native-svg";

const index = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="items-center bg-black justify-center" style={GlobalStyles.droidSafeArea}>
      <Text
        className="text-green-400 text-4xl p-10"
      >
        Syntax Showdown
      </Text>
      <View className="p-10 flex-row">
      <Button color="#4ade80">npm start</Button>
      <InformationCircleIcon color="#00CCBB"/>
      </View>
      <Hello />
    </View>
  );
};

export default index;
