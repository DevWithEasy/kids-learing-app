import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import getRandomSelection from '../../../utils/randomSelection'
import Source from '../../../assets/data/Source'
import playAudio from '../../../utils/playAudio'

export default function AlphabetMatch() {
    const [start, setStart] = useState(false)
    const [alphabet, setAlphabet] = useState({})
    const [palyed, setPlayed] = useState([])
    const [correct,setCorrect] = useState(false)

    const handleStart = () => {
        setStart(true)
        const alphabet = getRandomSelection(Source.banglaVowel())
        setAlphabet(alphabet)
        playAudio(alphabet.select.audio)
        setPlayed([...palyed,alphabet.select.letter])
    }
    const handleSelect = async(item) => {
        if(item._id === alphabet.select._id){
            const { sound } = await Audio.Sound.createAsync( require('../../../assets/audio/win_sound.wav'))
            await sound.playAsync()
            setCorrect(true)
        }else{

        }
    }
    
    return (
        <>
            {
                !start ?
                    <View
                        className='flex-1 bg-white justify-center items-center'
                    >
                        <TouchableOpacity
                            onPress={handleStart}
                            className='px-4 py-2 bg-blue-500 rounded'
                        >
                            <Text className='text-white'>Start</Text>
                        </TouchableOpacity>
                    </View>
                    :

                    <View
                        className='flex-1 bg-white'
                    >
                        <View
                            className={`flex-1 bg-gray-50 justify-center items-center`}
                        >
                            <Image
                                source={alphabet.select.image}
                                className='h-[250px] w-[250px]'
                            />

                        </View>
                        <View
                            className='flex-1 flex-row flex-wrap'
                        >
                            {
                                alphabet.choose.map(item=>
                                    <TouchableOpacity
                                        key={item._id}
                                        onPress={()=>handleSelect(item)}
                                        className='w-1/2 h-[150] p-2'
                                    >
                                        <View
                                            className='w-full h-full bg-red-50 justify-center items-center rounded-md'
                                        >
                                        <Text
                                            className='p-3 text-5xl'
                                        >
                                            {item.letter}
                                        </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
            }
        </>
    )
}