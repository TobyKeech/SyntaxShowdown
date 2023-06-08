import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Line, Svg } from "react-native-svg";

const FaceOff = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      layout: {
        orientation: ["landscape"],
      },
    });
  }, []);
  return (
    <ImageBackground source={require("../assets/terminalimg.jpg")} style={{flex: 1}}>
    
    <SafeAreaView  style={GlobalStyles.droidSafeArea}>
      
    </SafeAreaView>
    </ImageBackground>
  );
};

export default FaceOff;
