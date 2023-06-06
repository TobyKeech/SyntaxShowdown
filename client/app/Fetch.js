import { View, Text, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { getPoke } from "../services/CharacterServices";
import { ScrollView } from "react-native-gesture-handler";

const Fetch = () => {
  const [character, setCharacter] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.38.104:8080/characters");
      const json = await response.json();
      setCharacter(json);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <Text>Fetch</Text>
      <FlatList
          data={character}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.name}
            </Text>
          )}
        />
    </View>
        </ScrollView>
        </SafeAreaView>
  );
};

export default Fetch;
