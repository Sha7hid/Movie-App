import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../screens/HomeScreen';

export default function AppNavigation(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

