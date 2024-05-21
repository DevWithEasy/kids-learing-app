import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "kalpurush": require("../assets/fonts/kalpurush.ttf")
  })
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])
  if (!fontsLoaded) return null;
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='bangla/index'
        options={{
          title: 'বাংলা শিখি'
        }}
      />
      <Stack.Screen
        name='bangla/vowel'
        options={{
          title: 'বাংলা স্বরবর্ণ'
        }}
      />
      <Stack.Screen
        name='bangla/constant'
        options={{
          title: 'বাংলা ব্যঞ্জনবর্ণ'
        }}
      />
      <Stack.Screen
        name='bangla/kar'
        options={{
          title: 'বাংলা কার'
        }}
      />
      <Stack.Screen
        name='bangla/fola'
        options={{
          title: 'বাংলা ফলা'
        }}
      />
      <Stack.Screen
        name='bangla/punctuation'
        options={{
          title: 'বাংলা যতিচিহ্ন'
        }}
      />
      <Stack.Screen
        name='english/index'
        options={{
          title: 'ইংরেজি'
        }}
      />
      <Stack.Screen
        name='english/capital'
        options={{
          title: 'ইংরেজি - বড় হাতের বর্ণ'
        }}
      />
      <Stack.Screen
        name='english/small'
        options={{
          title: 'ইংরেজি - ছোট হাতের বর্ণ'
        }}
      />
      <Stack.Screen
        name='math/index'
        options={{
          title: 'অংক'
        }}
      />
      <Stack.Screen
        name='math/bangla'
        options={{
          title: 'সংখ্যা - বাংলা'
        }}
      />
      <Stack.Screen
        name='math/english'
        options={{
          title: 'সংখ্যা - ইংরেজি'
        }}
      />
    </Stack>
  )
}