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
  },
  homeHeader: {
    flexDirection: 'row',
    paddingVertical: 50, 
  },
  Profile: {
    width: 70,
    height: 70,
  },
  headerText: {
    paddingLeft: 20,
    paddingRight: 90,
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
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  transactionsHeaderText: {
    fontSize: 26,
    fontWeight: '500'
  },
  transactionsHeaderLink: {
    fontSize: 20,
    color: '#4169E1',
    fontWeight: '600'
  }
});

export default styles;