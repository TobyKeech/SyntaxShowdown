import { View, Text } from 'react-native'
import React from 'react'
import Hello from '../components/Hello'
import GlobalStyles from '../GlobalStyles'

const index = () => {
  return (
    <View style={GlobalStyles.droidSafeArea}>
      <Text>Homepage</Text>
      <Hello />
    </View>
  )
}

export default index