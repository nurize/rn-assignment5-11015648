import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from '../styles';

const HomeScreen = () => {
  const Profile = require('../assets/profile.png');
  const Search = require('../assets/search.png');
  const bankCard = require('../assets/Card.png');
  const send = require('../assets/send.png');
  const receive = require('../assets/recieve.png');
  const loan = require('../assets/loan.png');
  const topUp = require('../assets/topUp.png');
  const appleIcon = require('../assets/apple.png');
  const spotify = require('../assets/spotify.png');
  const transfer = require('../assets/moneyTransfer.png');
  return( 
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.homeHeader}>
        <Image style={styles.Profile} source={Profile} />
        <View style={styles.headerText}>
          <Text style={styles.homeHeaderText}>Welcome back,</Text>
          <Text style={styles.homeHeaderText2}>Eric Atsu</Text>
        </View>
        <Pressable style={styles.searchBackground}>
          <Image style={styles.searchIcon} source={Search}/>
        </Pressable>
      </View>
      <View style={styles.bankCard}>
        <Image style={styles.card} source={bankCard}/>
      </View>
      <View style={styles.status}>
        <Pressable style={styles.statusIcon}>
          <Image source={send}/>
        </Pressable>
        <Pressable style={styles.statusIcon}> 
          <Image source={receive}/>
        </Pressable>
        <Pressable style={styles.statusIcon}>
          <Image source={loan}/>
        </Pressable >
        <Pressable style={styles.statusIcon}>
          <Image source={topUp}/>
        </Pressable>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsHeaderText}>Transaction</Text>
          <Text style={styles.transactionsHeaderLink}>Sell All</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;

