import { StatusBar } from 'expo-status-bar';
import React, {  useContext } from 'react';
import {View, Text, Image, Pressable, FlatList, ScrollView } from 'react-native';
import styles from '../styles';
import getImage from '../utils/ImageLoader';
import { ThemeContext } from '../App';

const HomeScreen = () => {
  const Profile = require('../assets/profile.png');
  const bankCard = require('../assets/Card.png');
  const transactions = require('../data/transactionData.json');
  const { theme } = useContext(ThemeContext);
  const DarkMode = theme === 'dark';

  const themeTextStyle = DarkMode ? styles.darkText : styles.lightText;
  const themeContainerStyle = DarkMode ? styles.darkContainer : styles.lightContainer;
  const themeStatusStyle = DarkMode ? 'dark-content' : 'light-content';
  const themeSearch = DarkMode ? styles.darkThemeSearch : styles.lightThemeSearch;
  //const themeIcon = DarkMode ? styles.darkIcon;

  const Search = DarkMode ? require('../assets/searchIcon.png') : require('../assets/search.png');
  const send = DarkMode ? require('../assets/upArrow.png') : require('../assets/send.png');
  const receive = DarkMode ? require('../assets/downArrow.png') : require('../assets/recieve.png');
  const loan = DarkMode ? require('../assets/coin.png') : require('../assets/loan.png');
  const topUp = DarkMode ? require('../assets/upload.png') : require('../assets/topUp.png');

  return( 
    <View style={[styles.container, themeContainerStyle]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={themeStatusStyle}/>
      <View style={styles.homeHeader}>
        <Image style={styles.Profile} source={Profile} />
        <View style={styles.headerText}>
          <Text 
            style={[
              styles.homeHeaderText, 
              themeTextStyle
            ]}>
              Welcome back,
          </Text>
          <Text style={[
            styles.homeHeaderText2, 
            themeTextStyle
          ]}>
            Eric Atsu
          </Text>
        </View>
        <Pressable style={[
          styles.searchBackground, 
          themeSearch
        ]}>
          <Image style={styles.searchIcon} source={Search}/>
        </Pressable>
      </View>
      <View style={styles.bankCard}>
        <Image style={styles.card} source={bankCard}/>
      </View>
      <View style={styles.status}>
        <View>
          <Pressable style={[styles.statusIcon, themeSearch]}>
            <Image source={send}/>
          </Pressable>
          <Text style={[styles.statusText, themeTextStyle]}>Sent</Text>
        </View>
        <View>
          <Pressable style={[styles.statusIcon, themeSearch]}> 
            <Image source={receive}/>
          </Pressable>
          <Text style={[styles.statusText, themeTextStyle]}>Receive</Text>
        </View>
        <View>
          <Pressable style={[styles.statusIcon, themeSearch]}>
            <Image source={loan}/>
          </Pressable >
          <Text style={[styles.statusText, themeTextStyle]}>Loan</Text>
        </View>
        <View>
          <Pressable style={[styles.statusIcon, themeSearch]}>
            <Image source={topUp}/>
          </Pressable>
          <Text style={[styles.statusText, themeTextStyle]}>Topup</Text>
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={[
            styles.transactionsHeaderText, 
            themeTextStyle
            ]}>
              Transaction
          </Text>
          <Text style={styles.transactionsHeaderLink}>Sell All</Text>
        </View>
        <FlatList 
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.transaction}>
              <View style={[styles.transactionIcon, themeSearch]}>
                <Image source={getImage(item.id)} style={[styles.transactionIconAct]}/>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={[styles.transactionTitle, themeTextStyle]}>{item.title}</Text>
                <Text style={styles.transactionDescr}>{item.description}</Text>
              </View>
              <View style={styles.transactionAmtContainer}>
                <Text style={[styles.transactionAmt, themeTextStyle]}>{item.cost}</Text>
              </View>
            </View>
          )}
        />
      </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen;

