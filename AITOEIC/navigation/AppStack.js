//import React from 'react';
// import {View, TouchableOpacity, Text} from 'react-native';
//import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//import HomeScreen from '../screens/HomeScreen';
//import ChatScreen from '../screens/ChatScreen';
//import ProfileScreen from '../screens/ProfileScreen';
//import AddPostScreen from '../screens/AddPostScreen';
//import MessagesScreen from '../screens/MessagesScreen';
//import EditProfileScreen from '../screens/EditProfileScreen';

//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

// const FeedStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="RN Social"
//       component={HomeScreen}
//       options={{
//         headerTitleAlign: 'center',
//         headerTitleStyle: {
//           color: '#2e64e5',
//           fontFamily: 'Kufam-SemiBoldItalic',
//           fontSize: 18,
//         },
//         headerStyle: {
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerRight: () => (
//           <View style={{marginRight: 10}}>
//             <FontAwesome5.Button
//               name="plus"
//               size={22}
//               backgroundColor="#fff"
//               color="#2e64e5"
//               onPress={() => navigation.navigate('AddPost')}
//             />
//           </View>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="AddPost"
//       component={AddPostScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#2e64e515',
//           shadowColor: '#2e64e515',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="HomeProfile"
//       component={ProfileScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#fff',
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//   </Stack.Navigator>
// );

// const MessageStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen name="Messages" component={MessagesScreen} />
//     <Stack.Screen
//       name="Chat"
//       component={ChatScreen}
//       options={({route}) => ({
//         title: route.params.userName,
//         headerBackTitleVisible: false,
//       })}
//     />
//   </Stack.Navigator>
// );

// const ProfileStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="EditProfile"
//       component={EditProfileScreen}
//       options={{
//         headerTitle: 'Edit Profile',
//         headerBackTitleVisible: false,
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#fff',
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//       }}
//     />
//   </Stack.Navigator>
// );

//const AppStack = () => {
//   const getTabBarVisibility = (route) => {
//     const routeName = route.state
//       ? route.state.routes[route.state.index].name
//       : '';

//     if (routeName === 'Chat') {
//       return false;
//     }
//     return true;
//   };

  //return (
    // <Tab.Navigator
    //   tabBarOptions={{
    //     activeTintColor: '#2e64e5',
    //   }}>
    //   <Tab.Screen
    //     name="Home"
    //     component={FeedStack}
    //     options={({route}) => ({
    //       tabBarLabel: 'Home',
    //       // tabBarVisible: route.state && route.state.index === 0,
    //       tabBarIcon: ({color, size}) => (
    //         <MaterialCommunityIcons
    //           name="home-outline"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     })}
    //   />
    //   <Tab.Screen
    //     name="Messages"
    //     component={MessageStack}
    //     options={({route}) => ({
    //       tabBarVisible: getTabBarVisibility(route),
    //       // Or Hide tabbar when push!
    //       // https://github.com/react-navigation/react-navigation/issues/7677
    //       // tabBarVisible: route.state && route.state.index === 0,
    //       // tabBarLabel: 'Home',
    //       tabBarIcon: ({color, size}) => (
    //         <Ionicons
    //           name="chatbox-ellipses-outline"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     })}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={ProfileStack}
    //     options={{
    //       // tabBarLabel: 'Home',
    //       tabBarIcon: ({color, size}) => (
    //         <Ionicons name="person-outline" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>

    //<Stack.Navigator>
        //<Stack.Screen name="Home" component={HomeScreen} />
    //</Stack.Navigator>

  //);
//};

//export default AppStack;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NguPhapScreen from '../screens/NguPhapScreen';
import SettingScreen from '../screens/SettingScreen';
import TuVungScreen from '../screens/TuVungScreen';
import AIspeakScreen from '../screens/AIspeakScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function HomeStack() {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#9900CC"
      barStyle={{ backgroundColor: '#DDDDDD' }}
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
      //     tabBarActiveTintColor: 'tomato',
      //     tabBarInactiveTintColor: 'gray',
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
          tabBarLabel: 'Luyện Tập',
          tabBarOptions: { showIcon: true },
          tabBarBadge: 3
          
        }}
      />
      <Tab.Screen
        name="TuVung"
        component={TuVungScreen}
        options={{
          tabBarLabel: 'Từ Vựng',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
        
      />
      <Tab.Screen
        name="NguPhap"
        component={NguPhapScreen}
        options={{
          tabBarLabel: 'Ngữ Pháp',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="Profile" color={color} size={26} />
          // ),
        }}
      />
       <Tab.Screen
        name="aispeak"
        component={AIspeakScreen}
        options={{
          tabBarLabel: 'AI nói',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
        
      />
      <Tab.Screen
        name="caidat"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Cài Đặt',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="account" color={color} size={26} />
          // ),
        }}
        
      />
    </Tab.Navigator>
  );
}