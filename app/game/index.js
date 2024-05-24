import { View, Text } from 'react-native'
import React from 'react'
import getRandomSelection from '../../utils/randomSelection'
import Source from '../../assets/data/Source'

export default function Games() {
    console.log(getRandomSelection(Source.banglaVowel()))
  return (
    <View>
      <Text>Games</Text>
    </View>
  )
}