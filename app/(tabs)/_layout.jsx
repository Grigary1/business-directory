import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel:({focused,color,position,children})=>{
            return focused?<Text className="text-2xl">hey</Text>:<Text>here</Text>;
          },
          tabBarIcon:({focused,color,size})=>{
            return focused?<FontAwesome name="home" size={24} color="#4281A4" />:<FontAwesome name="home" size={24} color="#EAD2AC" />;
          }
        }}
      />
      <Tabs.Screen name="explore" options={{ 
        tabBarLabel: 'Explore',
      tabBarIcon:({focused,color,size})=>{
        return focused?<Ionicons name="globe-outline" size={24} color="black" />:<Ionicons name="globe" size={24} color="black" />
      }
      }} />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabLayout;
