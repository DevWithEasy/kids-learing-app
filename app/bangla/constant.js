import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Source from '../../assets/Source'

export default function Constant() {
  return (
    <ScrollView
    className='bg-white'
  >
    <View
      className='flex-row flex-wrap'
    >
    {
      Source.banglaConstant().map(item=>
        <TouchableOpacity
          key={item._id}
          className='w-4/12 p-2'
        >
          <View
            className='h-20 justify-center items-center bg-gray-50 rounded-md'
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