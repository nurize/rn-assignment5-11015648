import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyCards from './screens/Cards';
import Statistics from './screens/Statistics';

const Tab = createBottomTabNavigator();

export default function App() {
  const Home = require("./assets/home.png");
  const Cards = require("./assets/myCards.png");
  const StatisticsIcon = require('./assets/statictics.png');
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
          <Image source={Home}/>,
        }}/>
        <Tab.Screen 
        name='My Cards' 
        component={MyCards}
        options={{
          tabBarIcon: ({color}) => 
            <Image source={Cards}/>
        }}/>
        <Tab.Screen 
        name='Statistics' 
        component={Statistics}
        options={{
          tabBarIcon: ({color}) => 
            <Image source={StatisticsIcon} />
        }}/>
        <Tab.Screen 
        name='Settings' 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => 
          <Ionicons name='settings' size={20} color={color}/>,
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
