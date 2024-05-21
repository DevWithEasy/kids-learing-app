import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import  { toBengaliNumber} from 'bengali-number'
import { useRouter } from 'expo-router'

export default function Table() {
    const tables = new Array(20).fill(0).map((_,i)=> i+1)
    const router = useRouter()
    return (
        <ScrollView
            className='p-2'
        >
            <View
                className='space-y-2 pb-5'
            >
                {tables.map(table => (
                    <TouchableOpacity
                    onPress={()=>router.push(`/math/table/${table}`)}
                        className='w-11/12 mx-auto px-2 py-4 bg-white items-center rounded-full'
                    >
                        <Text>{toBengaliNumber(table)} নং ঘরের নামতা</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}