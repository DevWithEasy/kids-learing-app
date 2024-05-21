import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { toBengaliNumber } from 'bengali-number'
import table_id_image from '../../../assets/math_table_id.png'

export default function TableID() {
    const { id } = useLocalSearchParams()
    const tables = new Array(10).fill(0).map((_, i) => id * (i + 1))

    return (
        <ScrollView
            className='bg-white p-2'
        >
            <Text
                className='w-full py-2 bg-blue-500 text-white text-center'
            >
                {toBengaliNumber(id)} নং নামতা
            </Text>
            <View>
                {
                    tables.map((item, i) =>
                        <View key={i}>
                            <Text>{toBengaliNumber(id)} x {toBengaliNumber(i+1)} = {toBengaliNumber(item)}</Text>
                        </View>
                    )
                }
            </View>
            <Image
                source={table_id_image}
                className='h-52 w-52 mx-auto'
            />
        </ScrollView>
    )
}