import { View, Text } from 'react-native'
import React from 'react'
import PlayerHP from './PlayerHP'
import PlayerImage from './PlayerImage'
import { SafeAreaView } from 'react-native-safe-area-context'

const Player = ({ character }) => {

  console.log("CHARACTER:", character)

  return (
    <SafeAreaView>

    <View>
    <Text>
      {character.name}
   </Text>
        
    </View>



        <View>
    
      <PlayerHP />
      <PlayerImage />
    </View>

    </SafeAreaView>
  )
}

export default Player