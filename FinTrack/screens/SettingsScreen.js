import { React, useState, useContext } from "react";
import {View, Text, FlatList, Switch, Image } from 'react-native';
import styles from "../styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from "../App";
import { StatusBar } from "expo-status-bar";


const SettingsScreen = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [DarkMode, setDarkMode] = useState(theme === 'dark');
  const settings = require('../data/settings.json');

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
  const themeSettingsArrow = DarkMode ? require('../assets/greater-than.png') : require('../assets/forwardArrow.png');
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
            <Image source={themeSettingsArrow}/>
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