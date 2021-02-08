import React from "react"; 
import { StyleSheet, Text, View } from "react-native"; 
import { createAppContainer } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs"; 

import TransactionScreen from "./screens/BookTransactionScreen"; 
import SearchScreen from "./screens/SearchScreen";

export default function App() {
  return (
    <View>
    <AppContainer/>
    </View>
  );
}

var AppNavigator = createBottomTabNavigator({
  TransactionScreen : {Screens:TransactionScreen},
  Search : {Screens:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)
