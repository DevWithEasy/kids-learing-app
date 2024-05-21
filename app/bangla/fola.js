import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Source from '../../assets/Source'

export default function Fola() {
  console.log(Source.karAll()[0])
  return (
    <ScrollView
    className='bg-white'
  >
    <View
      className=''
    >
    {
      Source.folaAll().map(item=>
        <View
          key={item._id}
          className='w-full p-2'
        >
          <View
            className='h-40 flex-row space-y-2 bg-gray-50 rounded-md overflow-hidden'
          >
            <View>

            </View>
            <View>
              
              </View>
          </View>
        </View>
      )
    }
    </View>
  </ScrollView>
  )
}