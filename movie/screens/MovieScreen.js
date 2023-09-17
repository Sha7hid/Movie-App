import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { styles, theme } from '../theme';
import {LinearGradient} from 'expo-linear-gradient'
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
var {width, height} = Dimensions.get('window')
const ios = Platform.OS ==='ios';
const topMargin =  ios? '':'mt-3';
const moviename = "A time called you"
export default function MovieScreen() {
    const {params: item} = useRoute();
    const [isFavourite,toggleFavourite] = useState(false)
    const navigation = useNavigation();
    const [cast, setCast] = useState([1,2,3,4,5])
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{

    },[item])

  return (
  <ScrollView
  contentContainerStyle={{paddingBottom:20}}
  className="flex-1 bg-neutral-900"
  >
{/* back button and movie poster */}
<View className={"w-full mt-8"}>
<SafeAreaView className={"absolute z-20 w-full  flex-row justify-between items-center px-9"+topMargin}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
<ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
</TouchableOpacity>
<TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
    <HeartIcon size="35" color={isFavourite? theme.background : "white"}/>
</TouchableOpacity>
</SafeAreaView>
{
    loading? (
<Loading/>
    ):(
<View>
    <Image
   source={require('../assets/atime.jpg')}
   style={{width,height:height*0.55}} 
    />
    <LinearGradient
    colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
    style={{width,height:height*0.40}}
    start={{x:0.5,y:0}}
    end={{x:0.5,y:1}}
    className="absolute bottom-0"
    />
</View>
    )
}

</View>
{/* movie details */}
<View style={{marginTop: -(height*0.09)}} className="space-y-3">
{/* title */}
<Text className="text-white text-center text-3xl font-bold tracking-wider">
    {moviename}
</Text>
{/* status , release, runtime */}
<Text className="text-neutral-400 font-semibold text-base text-center">
    Released * 2023 * 52 min
</Text>
{/* genres */}
<View className="flex-row justify-center mx-4 space-x-2">
    <Text className="text-neutral-400 font-semibold text-base text-center">
Romance *
    </Text>
    <Text className="text-neutral-400 font-semibold text-base text-center">
Mystery * 
    </Text>
    <Text className="text-neutral-400 font-semibold text-base text-center">
Fantasy
    </Text>
</View>
{/* description */}
<Text className="text-neutral-400 mx-4 tracking-wide">
A grieving woman magically travels through time to 1998, where she meets a man with an uncanny resemblance to her late love.
</Text>
</View>
{/* cast */}
<Cast navigation={navigation} cast={cast}/>
{/* similar movies */}
{/* <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/> */}
  </ScrollView>
  )
}