import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import React from "react";
import Hello from "../components/Hello";
import GlobalStyles from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { InformationCircleIcon } from "react-native-heroicons/solid";

const index = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="bg-black" style={GlobalStyles.droidSafeArea}>
      <View className="absolute top-5 right-8 flex items-center justify-center w-8 h-8 rounded-full border border-green-400">
        <Text className="text-green-400 text-2xl">i</Text>
      </View>
      <View className="items-center justify-center absolute left-0 right-0 top-0 bottom-0">
        <Text className="text-green-400 text-4xl p-10">syntax_showdown</Text>
        <View className="p-10 flex-row">
          <Button color="rgb(74 222 128)" titleStyle={{color: 'black'}}>npm start</Button>
        </View>
        <Hello />
      </View>
    </View>
  );
};

export default index;
