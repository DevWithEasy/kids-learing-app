import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'
import { useRouter } from 'expo-router'

export default function Vowel() {
  const router = useRouter()
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
            onPress={()=> {
              playAudio(item.audio)
              router.push(`/alphabet/${item._id}?order_no=${item.order_no}`)
            }}
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