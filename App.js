//Dependencias
/*
1. expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
2. yarn add react-navigation-stack
3. yarn add react-native-safe-area-view react-native-safe-area-context
*/

import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { UsersScreen, PostsScreen, DetailsScreen } from './screens';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen
  },
  Posts:{
    screen: PostsScreen
  },
  Details: {
    screen: DetailsScreen
  }
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  
});