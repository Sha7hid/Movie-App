import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

export default function AppNavigation(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
          <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
          <Stack.Screen name="Person" options={{headerShown:false}} component={PersonScreen} />
          <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

