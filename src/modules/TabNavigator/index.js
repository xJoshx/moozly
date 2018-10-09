import React from 'react'
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { iOSColors } from 'react-native-typography'

import Feed from '../Feed'
import Profile from '../Profile'
import Collections from '../Collections'
import Search from '../Search'
import Article from '../Article'

const FeedStack = createStackNavigator({
  Home: Feed,
  Article: Article
})

export default createBottomTabNavigator(
  {
    Home: FeedStack,
    Collections: { screen: Collections },
    Settings: { screen: Profile },
    Search: { screen: Search }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName, size = 25
        if (routeName === 'Home') {
          iconName = `home`
        } else if (routeName === 'Collections') {
          iconName = `book-multiple`
          size = 20
        } else if (routeName === 'Settings') {
          iconName = `account`
          size = 28
        } else if (routeName === 'Search') {
          iconName = `magnify`
        }

        return (
          <MaterialCommunityIcons
            name={iconName}
            size={size}
            color={tintColor}
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: iOSColors.purple,
      inactiveTintColor: iOSColors.black,
      showLabel: false
    },
    animationEnabled: false,
    swipeEnabled: false
  }
)
