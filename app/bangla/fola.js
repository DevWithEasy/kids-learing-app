import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'

export default function Fola() {
  console.log(Source.folaAll()[0])
  return (
    <ScrollView
    className=''
  >
    <View
      className='flex-row flex-wrap'
    >
    {
      Source.folaAll().map(item=>
        <View
          key={item._id}
          onPress={()=> playAudio(item.audio)}
          className='w-6/12 p-2'
        >
          <View
            className='bg-white rounded-md overflow-hidden'
          >
            <View
              className='p-2 justify-center items-center'
            >
              <Text
                className='text-6xl'
              >
                {item.letter}
              </Text>
              <Text
                className='text-lg'
              >
                {item.name}
              </Text>
            </View>
            <View
              className='p-2 flex-row flex-wrap'
            >
              {
                item.examples.map((example,i) =>
                  <Text
                    key={i}
                    className='p-1'
                  >
                    {example}
                  </Text>
                )
              }
              </View>
          </View>
        </View>
      )
    }
    </View>
  </ScrollView>
  )
}