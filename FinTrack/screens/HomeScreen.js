import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, Image, Pressable, FlatList, ScrollView, Appearance, useColorScheme} from 'react-native';
import styles from '../styles';
import getImage from '../utils/ImageLoader';

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
  const transactions = require('../data/transactionData.json');


  return( 
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View>
          <Pressable style={styles.statusIcon}>
            <Image source={send}/>
          </Pressable>
          <Text style={styles.statusText}>Sent</Text>
        </View>
        <View>
          <Pressable style={styles.statusIcon}> 
            <Image source={receive}/>
          </Pressable>
          <Text style={styles.statusText}>Receive</Text>
        </View>
        <View>
          <Pressable style={styles.statusIcon}>
            <Image source={loan}/>
          </Pressable >
          <Text style={styles.statusText}>Loan</Text>
        </View>
        <View>
          <Pressable style={styles.statusIcon}>
            <Image source={topUp}/>
          </Pressable>
          <Text style={styles.statusText}>Topup</Text>
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsHeaderText}>Transaction</Text>
          <Text style={styles.transactionsHeaderLink}>Sell All</Text>
        </View>
        <FlatList 
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.transaction}>
              <View style={styles.transactionIcon}>
                <Image source={getImage(item.id)} style={styles.transactionIconAct}/>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDescr}>{item.description}</Text>
              </View>
              <View style={styles.transactionAmtContainer}>
                <Text style={styles.transactionAmt}>{item.cost}</Text>
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

