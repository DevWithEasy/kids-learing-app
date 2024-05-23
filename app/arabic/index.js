import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Source from '../../assets/data/Source'
import getArabicList from '../../utils/getArabicList'
import playAudio from '../../utils/playAudio'
import { useRouter } from 'expo-router'

export default function Arabic() {
    const router = useRouter()
    return (
        <ScrollView>
            <View>
                {
                    getArabicList(Source.arabicAll(), 3).map((items, i) =>
                        <View
                            key={i}
                            className='flex-row'
                        >
                            {
                                items.map(item =>
                                    <TouchableOpacity
                                        key={item._id}
                                        onPress={() => {
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
                    )
                }
            </View>
        </ScrollView>
    )
}