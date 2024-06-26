import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //For the Home screen
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  homeHeader: {
    flexDirection: 'row',
    paddingVertical: 50, 
    paddingRight: 20,
  },
  Profile: {
    width: 70,
    height: 70,
  },
  headerText: {
    paddingLeft: 20,
    paddingRight: 70,
  },
  homeHeaderText: {
    fontSize: 20,
    paddingBottom: 5,
    color: 'grey',
    fontWeight: '300',
  },
  homeHeaderText2: {
    fontSize: 28,
    fontWeight: '500',
  },
  searchBackground: {
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    borderWidth: 20,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    alignSelf: 'center',
    //backgroundColor: '#B3B3B3',
    padding: 5,
    width: 30,
    height: 20,
  },
  bankCard: {
    height: 200,
    width: 350,
  },
  card: {
    width: 'auto',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  statusIcon: {
    backgroundColor: '#F2F2F2',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 10,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  }, 
  transactionsHeaderText: {
    fontSize: 30,
    fontWeight: '500'
  },
  transactionsHeaderLink: {
    fontSize: 20,
    color: '#4169E1',
    fontWeight: '600'
  },
  transaction: {
    flexDirection: "row",
    //justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  transactionDetails: {
    flexDirection: "column",
    // paddingRight: 50,
    flex: 1,
  }, 
  transactionTitle: {
    fontSize: 24,
    fontWeight: "500"
  }, 
  transactionDescr: {
    color: '#B3B3B3',
    fontWeight: '400',
    fontSize: 20,
  },
  transactionAmtContainer: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  transactionAmt: {
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: 15,
    alignSelf: 'flex-end',
    flexDirection: 'column',
  },
  transactionIcon: {
    width: 70,
    height: 70,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    marginRight: 15,
    justifyContent: 'flex-start',
  },
  transactionIconAct: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: '50%',
    height: '40%',
    resizeMode: 'contain', 
  },
  //Settings Screen
  settingsHeader: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 40,
  },
  settingsTitle: {
    fontSize: 28,
    fontWeight: '500',
  },
  settingsOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 35,
    borderBottomWidth: 2,
    borderColor: '#F2F2F2',
  },
  settingsOption: {
    fontSize: 22,
    fontWeight: '500',
  },
  theme: {
    flexDirection: 'row',
    paddingBottom: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeText: {
    fontSize: 26,
    fontWeight: '500',
  },
});

export default styles;