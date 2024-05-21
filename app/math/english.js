import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Source from '../../assets/Source'

export default function English() {
    console.log(Source.numbersEnglish()[0])
  return (
    <ScrollView
    className=''
  >
    <View
      className='flex-row flex-wrap'
    >
    {
      Source.numbersEnglish().map(item=>
        <TouchableOpacity
          key={item._id}
          className='w-4/12 p-2'
        >
          <View
            className='h-28 justify-center items-center space-y-3 bg-white rounded-md'
          >
          <Text
            className='text-4xl'
          >
            {item.letter}
          </Text>
          <Text
            className=''
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