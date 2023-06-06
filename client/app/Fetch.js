import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { getPoke } from "../services/CharacterServices";

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
  );
};

export default Fetch;
