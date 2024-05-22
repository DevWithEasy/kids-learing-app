import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'

export default function AlphabetId() {
    const { id, order_no } = useLocalSearchParams()
    const [currentId, setCurrentId] = useState(id)
    const alphabet = Source.banglaSingle(currentId)
    const alphabets = alphabet.vowel ? Source.banglaVowel() : Source.banglaConstant()
    return (
        <ScrollView
            className='p-2 space-y-2'
        >
            <View
                className='bg-white rounded-md'
            >
                <View
                    className='flex-row'
                >
                    <View
                        className='w-1/2 justify-center items-center'
                    >
                        <Text
                            className='text-[120px] text-red-500 font-bold'
                        >
                            {alphabet.letter}
                        </Text>
                    </View>
                    <View
                        className='w-1/2 p-4 justify-center items-center'
                    >
                        <Image
                            source={alphabet.image}
                            className='h-44 w-44'
                        />
                    </View>
                </View>
                <View
                    className='px-4 py-2 border-t space-y-2'
                >
                    <Text
                        className='text-4xl text-red-500'
                    >
                        {alphabet.word}
                    </Text>
                    <Text
                        className='text-xl'
                    >
                        {alphabet.sentence}
                    </Text>
                </View>
            </View>
            <ScrollView
                horizontal={true}
                className='p-2 bg-white space-x-2'
            >
                {
                    alphabets.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                setCurrentId(item._id)
                                playAudio(alphabet.audio)
                            }}
                            className='h-16 w-16 p-2 justify-center items-center bg-gray-50 rounded'
                        >
                            <Text
                                className='text-4xl'
                            >
                                {item.letter}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        </ScrollView>
    )
}