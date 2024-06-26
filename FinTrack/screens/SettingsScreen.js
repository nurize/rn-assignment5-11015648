import React from "react";
import {View, Text, FlatList, Switch} from 'react-native';
import styles from "../styles";
import Ionicons from '@expo/vector-icons/Ionicons';

const SettingsScreen = () => {
  const settings = require('../data/settings.json');
  return (
    <View style={styles.container}>
      <View style={styles.settingsHeader}>
        <Text style={styles.settingsTitle}>Settings</Text>
      </View>
      <FlatList
      data={settings}
      renderItem={({item}) => {
        return (
          <View style={styles.settingsOptions}>
            <Text style={styles.settingsOption}>{item.name}</Text>
            <Ionicons name="arrow-forward" size={24}/>
          </View>
        )
      }}/>
      <View style={styles.theme}>
        <Text style={styles.themeText}>Theme</Text>
        <Switch/>
      </View>
    </View>
  )
}

export default SettingsScreen;