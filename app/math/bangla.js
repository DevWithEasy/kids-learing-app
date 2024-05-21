import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Source from '../../assets/Source'

export default function Bangla() {
  return (
    <ScrollView
    className=''
  >
    <View
      className='flex-row flex-wrap'
    >
    {
      Source.numbersBangla().map(item=>
        <TouchableOpacity
          key={item._id}
          className='w-4/12 p-2'
        >
          <View
            className='h-28 justify-center items-center space-y-2 bg-white rounded-md'
          >
          <Text
            className='text-4xl'
          >
            {item.letter}
          </Text>
          <Text
            className='text-lg'
          >
            {item.punctuation}
          </Text>
          </View>
        </TouchableOpacity>
      )
    }
    </View>
  </ScrollView>
  )
}