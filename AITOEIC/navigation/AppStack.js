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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





// export default function AppStack() {
// const Tab = createMaterialBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#9900CC"
//       barStyle={{ backgroundColor: '#FFFFFF'}}
//       screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size, padding }) => {
//             let iconName;

//             if (route.name === 'LuyenTap') {
//               iconName = focused
//                 ? 'home'
//                 : 'home-outline';
//             } 
//             if (route.name === 'TuVung') {
//               iconName = focused
//                 ? 'home'
//                 : 'home-outline';
//             } 
//             if (route.name === 'NguPhap') {
//               iconName = focused
//                 ? 'home'
//                 : 'home-outline';
//             } 
//             if (route.name === 'aispeak') {
//               iconName = focused
//                 ? 'home'
//                 : 'home-outline';
//             } 
//             else if (route.name === 'caidat') {
//               iconName = focused ? 'book' : 'book';
//             }

//             return <Ionicons name={iconName} size={size} color={color} style={{paddingBottom: padding}} />;
//           },
//       //     tabBarActiveTintColor: 'tomato',
//       //     tabBarInactiveTintColor: 'gray',
//         })}
//         tabBarOptions={{
          
//           ActiveTintColor: 'tomato',
//           InactiveTintColor: 'gray',
//           labelStyle:{fontSize:16},
//         }}
//     >
//       <Tab.Screen
//         name="LuyenTap"
//         component={HomeScreen}
//         options={{
//           headerShown:false,
//           tabBarLabel: 'Luyện Tập',
//           tabBarOptions: { showIcon: true },
//           tabBarBadge: 3,
//         }}
//       />

//       <Tab.Screen
//         name="TuVung"
//         component={TuVungScreen}
//         options={{
//           tabBarLabel: 'Từ Vựng',
//           // tabBarIcon: ({ color }) => (
//           //   <MaterialCommunityIcons name="account" color={color} size={26} />
//           // ),
//         }}
        
//       />
//       <Tab.Screen
//         name="NguPhap"
//         component={NguPhapScreen}
//         options={{
//           tabBarLabel: 'Ngữ Pháp',
//           // tabBarIcon: ({ color }) => (
//           //   <MaterialCommunityIcons name="Profile" color={color} size={26} />
//           // ),
//         }}
//       />
//        <Tab.Screen
//         name="aispeak"
//         component={AIspeakScreen}
//         options={{
//           tabBarLabel: 'AI nói',
//           // tabBarIcon: ({ color }) => (
//           //   <MaterialCommunityIcons name="account" color={color} size={26} />
//           // ),
//         }}
        
//       />
//       <Tab.Screen
//         name="caidat"
//         component={SettingScreen}
//         options={{
//           headerShown:false,
//           tabBarLabel: 'Cài Đặt',
//           // tabBarIcon: ({ color }) => (
//           //   <MaterialCommunityIcons name="account" color={color} size={26} />
//           // ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function AppStack() {

  const Stack = createNativeStackNavigator();

  return (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false }} />
            <Stack.Screen name="Part1" component = {Part1} options={{title:'Part 1'}}/>
            <Stack.Screen name="Part2" component = {Part2} options={{title:'Part 2' }}/>
            <Stack.Screen name="Part3" component = {Part3} options={{title:'Part 3' }}/>
            <Stack.Screen name="Part4" component = {Part4} options={{title:'Part 4' }}/>
            <Stack.Screen name="Part5" component = {Part5} options={{title:'Part 5' }}/>
            <Stack.Screen name="Part6" component = {Part6} options={{title:'Part 6' }}/>
            <Stack.Screen name="Part7" component = {Part7} options={{title:'Part 7' }}/>
          </Stack.Navigator>
  );
}