import { View, Text, Modal, Button, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';


export default function VideoModal({ source, isVideo, setIsVideo }) {
    const video = useRef(null)
    const [status, setStatus] = useState({})
    const { height } = Dimensions.get('window')


    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVideo}
                onRequestClose={() => {
                    setIsVideo(!isVideo)
                }}>
                <View
                    style={{
                        height: height,
                    }}
                    className='bg-gray-500/90 justify-center items-center'


                >
                    <View
                        className='w-full p-4 overflow-hidden'
                    >
                        <Video
                            ref={video}
                            source={source}
                            useNativeControls
                            resizeMode={ResizeMode.COVER}
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                            className='h-[180px] w-full rounder-t'
                        />
                        <Button
                            title={status.isPlaying ? 'Pause' : 'Play'}
                            onPress={() =>
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                            className='absolute top-0'
                        />
                        <View
                            className='pt-2 items-center'
                        >


                            <TouchableOpacity
                                onPress={() => setIsVideo(!isVideo)}
                                className='w-10 h-10 bg-red-500 justify-center items-center rounded-full'
                            >
                                <Text
                                    className='text-white text-lg'
                                >
                                    X
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}