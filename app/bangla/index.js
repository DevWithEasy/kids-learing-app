import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { bangla_page } from '../../assets/data/ui_data'
import { useRouter } from 'expo-router'

export default function Bangla() {
  const  router = useRouter()
  return (
    <ScrollView
      className='bg-white'
    >
      <View
        className='flex-row flex-wrap pb-5'
      >
        {
          bangla_page.map((item, i) =>
            <TouchableOpacity
              key={i}
              onPress={() => router.push(item.path)}
              className='h-[180px] w-6/12 p-2'
            >
              <View
                className='h-full rounded-md overflow-hidden'
              >
                <ImageBackground
                  source={item.image}
                  resizeMode="center"
                  className='h-[180px] w-full items-center justify-end pb-4 rounded-md'
                >
                  <Text
                    className='text-base bg-white w-full text-center'
                  >
                    {item?.title}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>

          )
        }

      </View>
    </ScrollView>
  )
}