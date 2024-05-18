import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Source from "../assets/Source";
import { home } from "../assets/ui_data";

export default function Page() {
  const inset = useSafeAreaInsets()
  const array = new Array(10).fill(0).map((_, i) => i + 1)
  console.log(Source.colors())
  return (
    <View
      style={{
        paddingTop: inset.top
      }}

      className='bg-white'
    >
      {/* <Text
        className='text-2xl'
      >
        ইকরা (আদর্শলিপি)
      </Text> */}
      <ScrollView>
        <View
          className='pb-4'
        >
          <ImageBackground
          source={require('../assets/home_hero.jpg')}
          resizeMode="cover"
          className='h-[270px] items-center pt-12'
        >
          <View
            className='px-5 pb-2 bg-blue-500 rounded-tl-3xl rounded-br-3xl'
          >
            <Text
              className='text-2xl pt-1 text-center font-bangla font-bold text-white'
            >
              ইকরা
            </Text>
            <Text
              className='text-white'
            >
              আপনার শিশুর প্রথম শিক্ষার
            </Text>
          </View>

        </ImageBackground>
        </View>
        
        <View
          className='flex-row flex-wrap'
        >
          {
            home.map((item, i) =>
              <View
                key={i}
                className='h-[160px] w-6/12 p-2'
              >
                <View
                  className='h-full rounded-md overflow-hidden'
                >
                  <ImageBackground
                    source={item.image}
                    resizeMode="cover"
                    className='h-[160px] w-full items-center justify-end pb-5'
                  >
                    <Text
                      className='text-xl bg-white w-full text-center rounded-full font-bold'
                    >
                      {item?.title}
                    </Text>
                  </ImageBackground>
                </View>
              </View>

            )
          }

        </View>
      </ScrollView>
    </View>
  );
}