import { React, useState, useEffect, useContext } from "react";
import {View, Text, FlatList, Switch, Appearance, useColorScheme} from 'react-native';
import styles from "../styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from "../App";
import { StatusBar } from "expo-status-bar";


const SettingsScreen = () => {
  const settings = require('../data/settings.json');
  const {theme, setTheme} = useContext(ThemeContext);
  const [DarkMode, setDarkMode] = useState(theme === 'dark');

  // useEffect(() => {
  //   if(DarkMode) {
  //     Appearance.setColorScheme('dark');
  //   } else {
  //     Appearance.setColorScheme('light');
  //   }
  // }, [DarkMode]);

  const themeTextStyle = DarkMode ? styles.darkText : styles.lightText;
  const themeContainerStyle = DarkMode ? styles.darkSettings : styles.lightContainer;
  const themeStatusStyle = DarkMode ? 'dark-content' : 'light-content';
  const themeBorderStyle = DarkMode ? styles.darkBorder : styles.lightBorder;
  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar barStyle={themeStatusStyle}/>
      <View style={styles.settingsHeader}>
        <Text style={[styles.settingsTitle, themeTextStyle]}>Settings</Text>
      </View>
      <FlatList
      data={settings}
      renderItem={({item}) => {
        return (
          <View style={[styles.settingsOptions, themeBorderStyle]}>
            <Text style={[styles.settingsOption, themeTextStyle]}>{item.name}</Text>
            <Ionicons name="arrow-forward" size={24}/>
          </View>
        )
      }}/>
      <View style={styles.theme}>
        <Text style={[styles.themeText, themeTextStyle]}>Theme</Text>
        <Switch 
          value={DarkMode} 
          onValueChange={(value) => { 
            setDarkMode(value);
            setTheme(value ? 'dark' : 'light');
          }}
          trackColor={{false: '#B3B3B3', true: '#00FA9A'}}
          thumbColor='#F2F2F2'
        />
      </View>
    </View>
  );
};

export default SettingsScreen;