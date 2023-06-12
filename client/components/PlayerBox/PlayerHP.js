import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const PlayerHP = ({ characterhp }) => {

  const [healthBarWidth, setHealthBarWidth] = useState('100%');

  useEffect(() => {
    const healthPercentage = (characterhp.hp / 100) * 100;
    const updatedHealthBarWidth = `${healthPercentage}%`;
    setHealthBarWidth(updatedHealthBarWidth);
  }, [characterhp.hp]);

  return (
    <View>
      <View style={{ borderWidth: 2, borderColor: 'white', width: '100%', height: 30, backgroundColor: 'rgb(255,0,0)' }}>
        <View style={{ width: healthBarWidth, height: '100%', backgroundColor: 'rgb(74 222 128)' }} />

        <Text style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, textAlign: 'center', color: 'white', fontFamily: "SyneMono", fontSize: 20}}>
          {characterhp.hp}
        </Text>
        
      </View>
    </View>
  );
};

export default PlayerHP;



