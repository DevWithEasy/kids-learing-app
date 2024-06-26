import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'

export default function Kar() {
  console.log(Source.karAll()[0].image)
  return (
    <ScrollView
      className=''
    >
      <View
        className='flex-row flex-wrap'
      >
        {
          Source.karAll().map(item =>
            <TouchableOpacity
              key={item._id}
              onPress={()=> playAudio(item.audio)}
              className='w-4/12 p-2'
            >
              <View
                className='h-32 justify-center items-center space-y-2 bg-white rounded-md overflow-hidden'
              >
                <Image
                  source={item.image}
                  className='h-20 w-20'
                />
                <Text
                  className='text-lg'
                >
                  {item.letter} তে {item.kar}-কার
                </Text>
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    </ScrollView>
  )
}