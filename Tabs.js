



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Reels from './Reels';
import Search from './Search';
import Activity from './Activity';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
const Tabs= () => {
  return (
    <Tab.Navigator
      // tabBarOptions={{showLabel: false}}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Entypo
                name="home"
                size={30}
                style={{color: focused ? 'black' : 'black'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                name="search"
                size={30}
                style={{color: focused ? 'black' : 'black'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons
                name="play-box-outline"
                size={30}
                style={{color: focused ? 'black' : 'black'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                name="heart"
                size={30}
                style={{color: focused ? 'black' : 'black'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                style={{color: focused ? 'black' : 'black'}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs

const styles = StyleSheet.create({
 
})
