import { View, Text } from 'react-native'
import React from 'react'

const PlayerHP = ({characterhp}) => {
  return (
    <View>
      <Text>{characterhp.hp}</Text>
    </View>
  )
}

export default PlayerHP