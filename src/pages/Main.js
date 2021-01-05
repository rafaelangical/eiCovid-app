import React, { useState } from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../components/Button';
import { Link } from "react-router-native";
import Home from './Tabs/Home/Home';
import Complaint from './Tabs/Complaint/Complaint';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AutoAvaliacao from './Tabs/AutoAvaliation/AutoAvaliation';
import Estatistics from './Tabs/Estatistics/Estatistics';
import Recomendations from './Tabs/Recomendations/Recomendations';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: 'darkblue',
        style: {
          backgroundColor: '#FFF',
          height: 55,
          borderTopWidth: 1,
          borderTopColor: '#999'
        }
      }}
    >
      <Tab.Screen 
        name="Inicio" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Avaliação" 
        component={AutoAvaliacao} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-pulse' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Recomendações" 
        component={Recomendations} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-hand' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Estatisticas" 
        component={Estatistics} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-people' size={size} color={color} />
          )
        }}
      />
      {/* <Tab.Screen 
        name="Denuncias" 
        component={Complaint} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-call' size={size} color={color} />
          )
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
