import { View, Text } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';
import { useState } from 'react';

const Hello = () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
    <View>
    <Button
      title="Open Overlay"
      onPress={toggleOverlay}
    />
      <Text className="text-white">Info</Text>
    </View>
    </>
  )
}

export default Hello