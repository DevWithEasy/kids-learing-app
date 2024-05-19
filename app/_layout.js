import { View, Text } from 'react-native'
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
              headerShown : false
            }}
        />
    </Stack>
  )
}