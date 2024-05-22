import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Source from '../../assets/data/Source'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

export default function AlphabetId() {
    const { id, order_no } = useLocalSearchParams()
    const [currentId, setCurrentId] = useState(id)
    const [currentOrder, setCurrentOrder] = useState(Number(order_no))
    const alphabet = Source.banglaSingle(currentId)
    const alphabets = alphabet.vowel ? Source.banglaVowel() : Source.banglaConstant()
    const onGestureEvent = (event) => {
        const { translationX } = event.nativeEvent;
        if (translationX > 300) {
            if (alphabet.vowel) {
                if (currentOrder === 11) {
                    // setCurrentOrder(1)
                    // const find = alphabets.find(alphabet => alphabet.order_no === String(1))
                    // setCurrentId(find._id)
                } else {
                    setCurrentOrder(currentOrder + 1)
                    const find = alphabets.find(alphabet => alphabet.order_no === String(currentOrder + 1))
                    // setCurrentId(find._id)
                    console.log(alphabets)
                }
            } else {
                if (currentOrder === 50) {
                    // setCurrentOrder(12)
                    // const find = alphabets.find(alphabet => alphabet.order_no === String(12))
                    // setCurrentId(find._id)
                } else {
                    // setCurrentOrder(currentOrder + 1)
                    // const find = alphabets.find(alphabet => alphabet.order_no === String(currentOrder + 1))
                    // setCurrentId(find._id)
                }
            }
        } else if (translationX < -300) {
            console.log(order_no - 1)
        }
    }

    const onHandlerStateChange = (event) => {
        if (event.nativeEvent.state === State.END) {
            setTimeout(() => {

            }, 1000)
        }
    }
    
    return (
        <ScrollView
            className='p-2'
        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                    onHandlerStateChange={onHandlerStateChange}
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
                </PanGestureHandler>
            </GestureHandlerRootView>

        </ScrollView>
    )
}