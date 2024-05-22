import { Audio } from 'expo-av'

const playAudio = async (url) => {
    const { sound } = await Audio.Sound.createAsync(url)
    await sound.playAsync()
}

export default playAudio