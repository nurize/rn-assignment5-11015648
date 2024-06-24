import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import styles from '../styles';

const HomeScreen = () => {
return( 
  <View style={styles.container}>
    <StatusBar barStyle="dark-content"/>
    <View style={styles.homeHeader}>
      
    </View>
  </View>
)
}

export default HomeScreen;

