import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import getRandomSelection from '../../../utils/randomSelection'
import Source from '../../../assets/data/Source'
import playAudio from '../../../utils/playAudio'
import AlphabetMatchItem from '../../../components/AlphabetMatchItem'
import shuffleArray from '../../../utils/suffleWord'
import GameCompleteModal from '../../../components/GameCompleteModal'

export default function AlphabetMatch() {
    const [start, setStart] = useState(false)
    const [alphabet, setAlphabet] = useState({})
    const [played, setPlayed] = useState([])
    const [isVisible,setIsVisible] = useState(true)

    const handleStart = () => {
        setStart(true)
        const alphabet = getRandomSelection(Source.banglaVowel())
        setAlphabet(alphabet)
        playAudio(alphabet.select.audio)
        setPlayed([...played, alphabet.select.letter])
    }
    useEffect(() => {
        if (played.includes('complete')) {
            setIsVisible(true)
        }
    }, [played])
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
                                shuffleArray(alphabet.choose).map(item =>
                                    <AlphabetMatchItem
                                        key={item._id}
                                        item={item}
                                        alphabet={alphabet}
                                        setAlphabet={setAlphabet}
                                        played={played}
                                        setPlayed={setPlayed}
                                    />
                                )
                            }
                        </View>
                        <GameCompleteModal {...{
                            isVisible,
                            setIsVisible
                        }}/>
                    </View>
            }
        </>
    )
}