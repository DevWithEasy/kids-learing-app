import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Source from "../assets/Source";
import { home } from "../assets/ui_data";


export default function Page() {
  const inset = useSafeAreaInsets()
  const array = new Array(10).fill(0).map((_, i) => i + 1)
  // console.log(Source.colors())
  return (
    <View
      style={{
        paddingTop: inset.top
      }}

      className='bg-white pb-10'
    >
      <Text
        className='py-1 text-xl text-center bg-blue-500 text-white'
      >
        শিশুশিক্ষা (ইকরা)
      </Text>
      <ScrollView
        className=''
      >
        <View
          className='pb-4'
        >
          <ImageBackground
          source={require('../assets/home_hero.jpg')}
          resizeMode="center"
          className='h-[270px] items-center pt-12'
        >
          
        </ImageBackground>
        </View>
        
        <View
          className='flex-row flex-wrap pb-5'
        >
          {
            home.map((item, i) =>
              <TouchableOpacity
                key={i}
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
                      className='text-base bg-white w-full text-center rounded-full'
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
    </View>
  );
}