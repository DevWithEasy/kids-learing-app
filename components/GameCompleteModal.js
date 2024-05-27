import { View, Text, Modal, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function GameCompleteModal({ isVisible, setIsVisible }) {
    const { height } = Dimensions.get('window')
    const router = useRouter()
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setIsVisible(!isVisible)
            }}>
            <View
                style={{
                    height: height,
                }}
                className='bg-gray-500/90 justify-center items-center'


            >
                <View
                    className='w-9/12 mx-auto p-4 bg-white rounded-md overflow-hidden'
                >
                    <Text
                        className='font-bangla text-xl text-center'
                    >
                        অভিনন্দন
                    </Text>
                    <Image
                        source={require('../assets/app_image/win.png')}
                        className='w-20 h-20 mx-auto'
                    />
                    <View
                        className='flex-row justify-end space-x-3 mt-5'
                    >
                        <TouchableOpacity
                            className='p-2 bg-red-100 rounded-md'
                        >
                            <Text
                                className='text-red-500'
                                onPress={() => {
                                    setIsVisible(!isVisible)
                                }}
                            >
                                আবার খেলুন
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className='p-2 bg-green-100 rounded-md'
                        >
                            <Text
                                className='text-green-500'
                                onPress={() => {
                                    router.push('/')
                                }}
                            >
                                নতুন খেলা
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}