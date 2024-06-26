import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyCards from './screens/Cards';
import Statistics from './screens/Statistics';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition: 'below-icon', tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white', 
          height: 100, 
          padding: 10
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      }}>
        <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color}) => 
          <Ionicons name='home' size={24} color={color}/>,
        }}/>
        <Tab.Screen 
        name='My Cards' 
        component={MyCards}
        options={{
          tabBarIcon: ({color}) => 
            <Ionicons name='card' size={24} color={color}/>
        }}/>
        <Tab.Screen 
        name='Statistics' 
        component={Statistics}
        options={{
          tabBarIcon: ({color}) => 
            <Ionicons name='pie-chart' size={24} color={color}/>
        }}/>
        <Tab.Screen 
        name='Settings' 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => 
          <Ionicons name='settings' size={24} color={color}/>,
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
