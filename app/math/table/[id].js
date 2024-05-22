import { View, Text, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { toBengaliNumber } from 'bengali-number'
import table_id_image from '../../../assets/app_image/math_table_id.png'

export default function TableID() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams()
    const tables = new Array(10).fill(0).map((_, i) => id * (i + 1))
    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${toBengaliNumber(id)} নং নামতা`,
        });
    }, [navigation, id]);
    return (
        <ScrollView
            className='bg-white p-2 pt-4 space-y-5'
        >
            <View
                className='space-y-1'
            >
                {
                    tables.map((item, i) =>
                        <View
                            key={i}
                            className='p-1 flex-row space-x-2 mx-auto'
                        >
                            <View
                                className='h-10 w-10 justify-center items-center rounded bg-blue-500'
                            >
                                <Text className='text-white text-xl'>
                                    {toBengaliNumber(id)}
                                </Text>
                            </View>
                            <View
                                className='h-10 w-10 justify-center items-center bg-white rounded'
                            >
                                <Text
                                    className='text-lg'
                                >
                                    x
                                </Text>
                            </View>
                            <View
                                className='h-10 w-10 justify-center items-center bg-blue-500 rounded'
                            >
                                <Text className='text-white text-xl'>
                                    {toBengaliNumber(i + 1)}
                                </Text>
                            </View>
                            <View
                                className='h-10 w-10 justify-center items-center bg-white rounded'
                            >
                                <Text
                                    className='text-lg'
                                >
                                    =
                                </Text>
                            </View>
                            <View
                                className='h-10 w-16 justify-center items-center bg-red-500 rounded'
                            >
                                <Text className='text-white text-xl'>
                                    {toBengaliNumber(item)}
                                </Text>
                            </View>
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