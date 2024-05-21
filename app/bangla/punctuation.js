import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Source from '../../assets/Source'

export default function Punctuation() {
  console.log(Source.puncuationAll()[0])
  return (
    <ScrollView
      className=''
    >
      <View
        className=''
      >
        {
          Source.puncuationAll().map(item =>
            <View
              key={item._id}
              className='p-2'
            >
              <View
                className='bg-white rounded-md overflow-hidden'
              >
                <View
                  className='p-2 flex-col items-center'
                >
                  <Text
                    className='text-6xl text-red-500 px-6 pt-2 rounded-md shadow'
                  >
                    {item.mark}
                  </Text>
                  <Text
                    className='text-lg'
                  >
                    {item.name}
                  </Text>
                </View>
                <View
                  className='p-2 space-y-3'
                >
                  <View>
                    <Text
                      className='font-semibold'
                    >
                      ব্যবহারের নিয়মঃ
                    </Text>
                    <Text>
                      {item.use_case}
                    </Text>
                  </View>
                  <View>
                    <Text
                    className='font-semibold'
                    >
                      উদাহরণঃ
                    </Text>
                    <View>
                      {
                        item.examples.map((ex,i) =>
                          <Text
                            key={i}
                          >
                            {i+1}. {ex}
                          </Text>
                        )
                      }
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )
        }
      </View>
    </ScrollView>
  )
}