import { View, Text } from 'react-native'
import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

export default function Bangla() {
const init=async()=>{
  try {
    const db = await SQLite.openDatabaseAsync('main.db');
    const firstRow = await db.getFirstAsync('SELECT * FROM Color')
    console.log(firstRow)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  init()
},[])

  return (
    <View>
      <Text>
        Bangla
      </Text>
    </View>
  )
}