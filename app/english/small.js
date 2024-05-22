import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'

export default function Small() {
  return (
    <ScrollView
    className=''
  >
    <View
      className='flex-row flex-wrap'
    >
    {
      Source.englishAll().map(item=>
        <TouchableOpacity
          key={item._id}
          onPress={()=> playAudio(item.audio)}
          className='w-4/12 p-2'
        >
          <View
            className='h-20 justify-center items-center bg-white rounded-md'
          >
          <Text
            className='text-3xl'
          >
            {item.small}
          </Text>
          </View>
        </TouchableOpacity>
      )
    }
    </View>
  </ScrollView>
  )
}