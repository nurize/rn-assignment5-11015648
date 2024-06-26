import { React, useState, useEffect } from "react";
import {View, Text, FlatList, Switch, Appearance, useColorScheme} from 'react-native';
import styles from "../styles";
import Ionicons from '@expo/vector-icons/Ionicons';


const SettingsScreen = () => {
  const settings = require('../data/settings.json');
  const colorScheme = useColorScheme();
  const [DarkMode, setDarkMode] = useState(colorScheme === 'dark');

  useEffect(() => {
    if(DarkMode) {
      Appearance.setColorScheme('dark');
    } else {
      Appearance.setColorScheme('light');
    }
  }, [DarkMode]);

  const themeTextStyle = DarkMode ? styles.lightText: styles.darkText;
  const themeContainerStyle = DarkMode ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[themeContainerStyle]}>
      <View style={styles.settingsHeader}>
        <Text style={styles.settingsTitle}>Settings</Text>
      </View>
      <FlatList
      data={settings}
      renderItem={({item}) => {
        return (
          <View style={styles.settingsOptions}>
            <Text style={[styles.settingsOption, themeTextStyle]}>{item.name}</Text>
            <Ionicons name="arrow-forward" size={24}/>
          </View>
        )
      }}/>
      <View style={styles.theme}>
        <Text style={[styles.themeText, themeTextStyle]}>Theme</Text>
        <Switch 
          value={!DarkMode} 
          onValueChange={(DarkMode) => setDarkMode(!DarkMode)}
          trackColor={{false: '#B3B3B3', true: '#00FA9A'}}
          thumbColor='#F2F2F2'
        />
      </View>
    </View>
  )
}

export default SettingsScreen;