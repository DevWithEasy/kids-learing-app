import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Source from '../../assets/Source'

export default function Vowel() {
  
  return (
    <ScrollView
      className=''
    >
      <View
        className='flex-row flex-wrap'
      >
      {
        Source.banglaVowel().map(item=>
          <TouchableOpacity
            key={item._id}
            className='w-4/12 p-2'
          >
            <View
              className='h-20 justify-center items-center bg-white rounded-md'
            >
            <Text
              className='text-3xl'
            >
              {item.letter}
            </Text>
            </View>
          </TouchableOpacity>
        )
      }
      </View>
    </ScrollView>
  )
}