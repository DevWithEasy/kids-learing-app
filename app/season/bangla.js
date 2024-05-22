import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'

export default function Bangla() {
  return (
    <ScrollView
    className=''
  >
    <View
      className='flex-row flex-wrap'
    >
    {
      Source.seasonsBangla().map(item=>
        <TouchableOpacity
          key={item._id}
          onPress={()=> playAudio(item.audio)}
          className='w-6/12 p-2'
        >
          <View
            className='p-2 justify-center items-center space-y-2 bg-white rounded-md'
          >
            <Image
                source={item.image}
                className='h-24 w-24'
            />
          <Text
            className='text-xl'
          >
            {item.name}
          </Text>
          </View>
        </TouchableOpacity>
      )
    }
    </View>
  </ScrollView>
  )
}