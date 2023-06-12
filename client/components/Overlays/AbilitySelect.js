import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Overlay, Button } from "@rneui/themed";

const AbilitySelect = ({
  title,
  abilityvisible,
  characterData,
  selectedAttackIndex,
  selectedDefenseIndex,
  handleDefenseClick,
  handleAttackClick,
  setAbility,
  onAbilityPressHandle,
}) => {
  return (
    <Overlay
      overlayStyle={{
        alignItems: "center",
        backgroundColor: "bg-opacity-50",
      }}
      isVisible={abilityvisible}
      animationType="fade"
      supportedOrientations={["landscape"]}
      statusBarTranslucent={true}
      fullScreen = {true}
    >
    <StatusBar hidden={true} />
      <View className=" bg-green-400 border-solid border-black border-2 m-5">
        <View className="items-center justify-center">
          <Text style={{ color: "black", fontFamily: "SyneMono" }}>
            {title}
          </Text>
        </View>
        <View
          color="rgb(74 222 128)"
          titleStyle={{ color: "black", fontFamily: "SyneMono" }}
        />
        <View className=" bg-black items-center justify-center">
          <Text style={{ color: "white", fontFamily: "SyneMono" }}>
            Choose your Attack
          </Text>
        </View>

        {characterData
          ? characterData.attackList.map((item, index) => (
              <Button
                style={{ borderWidth: 2, borderColor: "black" }}
                color={
                  selectedAttackIndex === index
                    ? "rgb(74 222 128)"
                    : "rgb(240,3,1)"
                }
                key={item.id}
                onPress={() => {
                  handleDefenseClick(index);
                  handleAttackClick(index);
                  setAbility(item);
                }}
              >
                <Text className="text-white" style={{ fontFamily: "SyneMono" }}>
                  {item.name} - DMG:{Math.abs(item.value)}
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
                  selectedDefenseIndex === index
                    ? "rgb(74 222 128)"
                    : "rgb(36, 75, 221)"
                }
                key={item.id}
                onPress={() => {
                  handleAttackClick(index);
                  handleDefenseClick(index);
                  setAbility(item);
                }}
              >
                <Text className="text-white" style={{ fontFamily: "SyneMono" }}>
                  {item.name} - PROT:{item.value}
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
            onAbilityPressHandle();
          }}
        >
          <Text
            className="text-white"
            style={{ fontSize: 25, fontFamily: "SyneMono" }}
          >
            Finish Turn
          </Text>
        </Button>
      </View>
    </Overlay>
  );
};

export default AbilitySelect;
