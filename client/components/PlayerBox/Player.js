import { View, Text } from 'react-native'
import React from 'react'
import PlayerHP from './PlayerHP'
import PlayerImage from './PlayerImage'

const Player = () => {
  return (
    <View>
      <Text>Player</Text>
      <PlayerHP />
      <PlayerImage />
    </View>
  )
}

export default Player