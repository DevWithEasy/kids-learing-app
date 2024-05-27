import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Source from '../../assets/data/Source'
import playAudio from '../../utils/playAudio'
import VideoModal from '../../components/VideoModal'
import video_icon from '../../assets/app_image/video_icon.png'
import writing_pen from '../../assets/app_image/writing_pen.png'


export default function AlphabetId() {
    const { id, order_no } = useLocalSearchParams()
    const [currentId, setCurrentId] = useState(id)
    const alphabet = Source.banglaSingle(currentId)
    const alphabets = alphabet.vowel ? Source.banglaVowel() : Source.banglaConstant()
    const [isVideo, setIsVideo] = useState(false)
    
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
                        className='pt-2 text-4xl text-red-500'
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
                className='bg-white space-x-2'
            >
                {
                    alphabets.map(item => (
                        <TouchableOpacity
                            key={item._id}
                            onPress={() => {
                                setCurrentId(item._id)
                                playAudio(item.audio)
                            }}
                            className={`h-16 w-16 p-2 justify-center items-center rounded ${currentId === item._id ? 'bg-red-500' : 'bg-gray-50'}`}
                        >
                            <Text
                                className={`text-3xl ${currentId === item._id ? 'text-white' : ''}`}
                            >
                                {item.letter}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <View
                className='space-y-1'
            >
                <View
                    className='flex-row'
                >
                    <View
                        className='px-2 flex-row items-center bg-white rounded'
                    >
                        <Image
                            source={video_icon}
                            className='h-4 w-4'
                        />
                        <TouchableOpacity
                            onPress={() => setIsVideo(true)}
                            className='p-2'
                        >
                            <Text>কিভাবে লিখতে হয় ?</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View
                    className='flex-row'
                >
                    <View
                        className='px-2 flex-row items-center bg-white rounded'
                    >
                        <Image
                            source={writing_pen}
                            className='h-4 w-4'
                        />
                        <TouchableOpacity
                            onPress={() => setIsVideo(true)}
                            className='p-2'
                        >
                            <Text>লেখার প্র্যাকটিস করুন</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>


            <VideoModal {...{
                source: alphabet.video,
                isVideo,
                setIsVideo
            }} />


        </ScrollView>
    )
}