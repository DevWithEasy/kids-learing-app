import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'

export default function Color() {
  console.log(Source.colors()[0])
  return (
    <ScrollView
      className=''
    >
      <View
        className='flex-row flex-wrap'
      >
        {
          Source.colors().map(item =>
            <TouchableOpacity
              key={item._id}
              onPress={()=> playAudio(item.audio)}
              className='w-6/12 p-2'
            >
              <View
                className='p-2 justify-center items-center space-y-2 rounded-md'
                style={{
                  backgroundColor : item.code
                }}
              >
                <View
                  className='p-4 bg-white rounded-full'
                >
                  <Image
                  source={item.image}
                  className='h-20 w-20'
                />
                </View>
                
                <View
                  className='w-full flex-row justify-between'
                >
                  <Text
                    className='text-lg'
                    style={{
                      color : item.code === '#FFFFFF' ? '#000000' : item.code === '#FFFF00' ? '#000000' : '#FFFFFF'
                    }}
                  >
                    {item?.bn_name}
                  </Text>
                  <Text
                    className='text-lg'
                    style={{
                      color : item.code === '#FFFFFF' ? '#000000' : item.code === '#FFFF00' ? '#000000' : '#FFFFFF'
                    }}
                  >
                    {item?.en_name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    </ScrollView>
  )
}