import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const array = new Array(10).fill(0).map((_, i) => i + 1)
  console.log(array)
  return (
    <View>
      <Text>আদর্শলিপি</Text>
      <ScrollView>
        <View
          className='flex-row flex-wrap'
        >
          {
            array.map(i =>
              <View
                key={i}
                className='h-[160px] w-6/12 p-2'
              >
                <View
                  className='bg-blue-200 h-full rounded-md'
                >

                </View>
              </View>

            )
          }

        </View>
      </ScrollView>
    </View>
  );
}