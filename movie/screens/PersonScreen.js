import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
var {width, height} = Dimensions.get('window')
const ios = Platform.OS ===   'ios'
const verticalMargin =  ios? '':'my-3';
export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite,toggleFavourite] = useState(false)
    const [personMovies,setPersonMovies] = useState([1,2,3,4,5])
    const [loading,setLoading] = useState(false)
    return (
    <ScrollView className=" flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}}>
      {/* back button */}
      <View className="w-full pt-8 mt-8">
      <SafeAreaView className={"absolute z-20 w-full  flex-row justify-between items-center px-9"+verticalMargin}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
<ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
</TouchableOpacity>
<TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
    <HeartIcon size="35" color={isFavourite? "red" : "white"}/>
</TouchableOpacity>
</SafeAreaView>
      </View>
      {/* person details */}
      {
        loading? (
<Loading/>
        ):(
<View>
        <View className="flex-row justify-center"
        style={{
            shadowColor:'gray',
            shadowRadius:40,
            shadowOffset:{width:0,height:5},
            shadowOpacity:1
        }}
        >
            <View className="items-center rounded-full overflow-hidden h-22 w-72 border border-neutral-500">
            <Image  source={require('../assets/ahn.jpg')}
style={{height:height*0.43, width:width*0.74}}
/>
            </View>

        </View>
        <View className="mt-6">
<Text className="text-3xl text-white font-bold text-center">
Ahn hyo-seop
</Text>
<Text className="text-base text-neutral-500 font-bold text-center">
Seoul, South Korea
</Text>
        </View>
        <View className="mx-3 p-2 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
<View className="border-r-2 border-r-neutral-400 px-2 items-center">
    <Text className="text-white font-semibold">Gender</Text>
    <Text className="text-neutral-300 text-sm">Male</Text>
</View>
<View className="border-r-2 border-r-neutral-400 px-2 items-center">
    <Text className="text-white font-semibold">Birthday</Text>
    <Text className="text-neutral-300 text-sm">17 April 1995</Text>
</View>
<View className="border-r-2 border-r-neutral-400 px-2 items-center">
    <Text className="text-white font-semibold">Known for</Text>
    <Text className="text-neutral-300 text-sm">Acting</Text>
</View>
<View className=" px-2 items-center">
    <Text className="text-white font-semibold">Popularity</Text>
    <Text className="text-neutral-300 text-sm">73.02</Text>
</View>
        </View>
        <View className="my-6 mx-4 space-y-2">
<Text className="text-white text-lg">Biography</Text>
        <Text className="text-neutral-400 tracking-wide">
        Ahn Hyo-seop or Paul Ahn, is a Canadian actor and singer based in South Korea. He gained recognition for his main roles in the Korean dramas Still 17, Abyss, Dr. Romantic 2, Lovers of the Red Sky, Business Proposal and Dr. Romantic 3
        </Text>
        </View>
        {/* movies */}
        <MovieList title={'Movies'} hideSeeAll={true} data={personMovies}/>
      </View>
        )
      }
      
    </ScrollView>
  )
}