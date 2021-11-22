import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NguPhapScreen from '../screens/NguPhapScreen';
import SettingScreen from '../screens/SettingScreen';
import TuVungScreen from '../screens/TuVungScreen';
import AIspeakScreen from '../screens/AIspeakScreen';
import Part1 from '../screens/Part1';
import Part2 from '../screens/Part2';
import Part3 from '../screens/Part3';
import Part4 from '../screens/Part4';
import Part5 from '../screens/Part5';
import Part6 from '../screens/Part6';
import Part7 from '../screens/Part7';
import BoTuVung from '../screens/BoTuVung';
import thithu from '../screens/thithu';
import hopdong from '../screens/hopdong';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeStack() {
const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#9900CC"
      barStyle={{ backgroundColor: '#FFFFFF'}}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, padding }) => {
            let iconName;

            if (route.name === 'LuyenTap') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            if (route.name === 'TuVung') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            if (route.name === 'NguPhap') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            if (route.name === 'aispeak') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            else if (route.name === 'caidat') {
              iconName = focused ? 'book' : 'book';
            }
            return <Ionicons name={iconName} size={size} color={color} style={{paddingBottom: padding}} />;
          },
        })}
        tabBarOptions={{
          ActiveTintColor: 'tomato',
          InactiveTintColor: 'gray',
          labelStyle:{fontSize:16},
        }}
    >
      <Tab.Screen
        name="LuyenTap"
        component={HomeScreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Luyện Tập',
          tabBarOptions: { showIcon: true },
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="TuVung"
        component={TuVungScreen}
        options={{
          tabBarLabel: 'Từ Vựng',
        }}
        
      />
      <Tab.Screen
        name="NguPhap"
        component={NguPhapScreen}
        options={{
          tabBarLabel: 'Ngữ Pháp',
        }}
      />
       <Tab.Screen
        name="aispeak"
        component={AIspeakScreen}
        options={{
          tabBarLabel: 'AI nói',
        }}
        
      />
      <Tab.Screen
        name="caidat"
        component={SettingScreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Cài Đặt',
        }}
      />
    </Tab.Navigator>
  );
}

  export default function AppStack() {

  const AppStack = createNativeStackNavigator();

  return (
          <AppStack.Navigator>
            <AppStack.Screen name="Home" component={HomeStack}  options={{headerShown: false }} />
            <AppStack.Screen name="Part1" component = {Part1} options={{title:'Part 1', backgroundColor: 'transparent',}}/>
            <AppStack.Screen name="Part2" component = {Part2} options={{title:'Part 2' }}/>
            <AppStack.Screen name="Part3" component = {Part3} options={{title:'Part 3' }}/>
            <AppStack.Screen name="Part4" component = {Part4} options={{title:'Part 4' }}/>
            <AppStack.Screen name="Part5" component = {Part5} options={{title:'Part 5' }}/>
            <AppStack.Screen name="Part6" component = {Part6} options={{title:'Part 6' }}/>
            <AppStack.Screen name="Part7" component = {Part7} options={{title:'Part 7' }}/>
            <AppStack.Screen name="BoTuVung" component = {BoTuVung} options={{title:'600 Từ Vựng TOEIC',headerShown: false, }}/>
            <AppStack.Screen name="ThiThu" component = {thithu} options={{title:'Thi Thử' }}/>
            <AppStack.Screen name="hopdong" component = {hopdong} options={{title:'Hợp Đồng',headerShown: false,}}/>
          </AppStack.Navigator>
  );
}