import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
import getRandomSelection from '../utils/randomSelection'
import playAudio from '../utils/playAudio'
import Source from '../assets/data/Source'

export default function AlphabetMatchItem({ item, alphabet, setAlphabet, played, setPlayed }) {
    const [color, setColor] = useState('bg-red-50')
    const getNewAlphabet = () => {
        let newAlphabet;
        do {
            newAlphabet = getRandomSelection(Source.banglaVowel());
        } while (played.includes(newAlphabet.select.letter));
        return newAlphabet;
    }
    const handleSelect = async (item) => {
        if (played.length === 11) {
            if (item._id === alphabet.select._id) {
                const { sound } = await Audio.Sound.createAsync(require('../assets/audio/win_sound.wav'))
                await sound.playAsync()
                setColor('bg-green-500')
                setTimeout(() => {
                    setColor('bg-red-50')
                    setPlayed([...played, 'complete'])
                }, 500)
            } else {
                setColor('bg-red-500')
                setTimeout(() => {
                    setColor('bg-red-50')
                }, 500)
            }
        } else {
            if (item._id === alphabet.select._id) {
                const { sound } = await Audio.Sound.createAsync(require('../assets/audio/win_sound.wav'))
                await sound.playAsync()
                setColor('bg-green-500')
                setTimeout(() => {
                    setColor('bg-red-50')
                    const newAlphabet = getNewAlphabet()
                    setAlphabet(newAlphabet)
                    playAudio(newAlphabet.select.audio)
                    setPlayed([...played, newAlphabet.select.letter])
                }, 500)
            } else {
                const { sound } = await Audio.Sound.createAsync(require('../assets/audio/fail_sound.mp3'))
                await sound.playAsync()
                setColor('bg-red-500')
                setTimeout(() => {
                    setColor('bg-red-50')
                }, 500)
            }
        }

    }
    return (
        <TouchableOpacity
            onPress={() => handleSelect(item)}
            className='w-1/2 h-[150] p-2'
        >
            <View
                className={`w-full h-full justify-center items-center rounded-md ${color}`}
            >
                <Text
                    className={`p-3 text-5xl ${color === 'bg-red-500' || color === 'bg-green-500' ? 'text-white' : ''}`}
                >
                    {item.letter}
                </Text>
            </View>
        </TouchableOpacity>
    )
}