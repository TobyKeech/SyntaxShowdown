import { View, Text, Image } from 'react-native'
import React from 'react'
import PlayerHP from './PlayerHP'
import { SafeAreaView } from 'react-native-safe-area-context'

const Player = ({ character }) => {

  console.log("CHARACTER:", character)

  return (
    <SafeAreaView>

  
{/* <View> */}
{/* console.log(character.imgPath)
    <Image source = {require ({character.imgPath})}

      style = {{width:200, height: 200}}
      /> */}



      <View>

    <Text className=" text-green-400 text-3xl">
      {character.name}
   </Text>
        
    </View>


    <View >
    
       <PlayerHP characterhp = {character}/>
  
    </View>

  

    </SafeAreaView>
  )
}

export default Player