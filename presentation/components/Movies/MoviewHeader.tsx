import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';



interface MoviewHeaderProps {
  poster: string;
  originalTitle: string;
  title: string;
}

const MoviewHeader = ({ poster, originalTitle, title }: MoviewHeaderProps) => {

  const {height: screenHeight} = useWindowDimensions();
  return (
    <>
      <LinearGradient 
        colors={["rgba(0, 0, 0, 0.3)", "transparent"]}
        start={[0, 0]}
        style={{
          position: 'absolute',
          height: screenHeight * 0.4,
          zIndex: 1,
          width: '100%',
        }}
      />

      <View className='absolute top-14 left-4 z-10 elevation-lg'>
        <Pressable onPress={() => router.back()} >
          <Ionicons 
            name='arrow-back'
            size={30}
            color='white'
          />
        </Pressable>
      </View>

      <View
        style={{
          height: screenHeight * 0.7,
        }}
      >
        <View className='flex-1 rounded-b-[20px] overflow-hidden'>
          <Image 
            source={{ uri: poster }}
            resizeMode='cover'
            className='flex-1'
          />
        </View>


        <View className='m-4'>
          <Text className='font-semibold color-gray-600'>{originalTitle}</Text>
          <Text className='font-bold text-2xl'>{title}</Text>
        </View>

      </View>
    </>
  )
}

export default MoviewHeader