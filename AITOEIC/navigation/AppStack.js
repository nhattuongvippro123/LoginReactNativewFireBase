import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/bottomnavigate/HomeScreen';
import NguPhapScreen from '../screens/bottomnavigate/NguPhapScreen';
import SettingScreen from '../screens/bottomnavigate/SettingScreen';
import TuVungScreen from '../screens/bottomnavigate/TuVungScreen';
import AIspeakScreen from '../screens/bottomnavigate/AIspeakScreen';
import Part1 from '../screens/allpartscreen/Part1';
import Part2 from '../screens/allpartscreen/Part2';
import Part3 from '../screens/allpartscreen/Part3';
import Part4 from '../screens/allpartscreen/Part4';
import Part5 from '../screens/allpartscreen/Part5';
import Part6 from '../screens/allpartscreen/Part6';
import Part7 from '../screens/allpartscreen/Part7';
import thithu from '../screens/allpartscreen/thithu';
import BoTuVung from '../screens/vocabulary/BoTuVung';
import hopdong from '../screens/vocabulary/hopdong';
import thitruong from '../screens/vocabulary/thitruong';
import subaohanh from '../screens/vocabulary/subaohanh';
import cacquytrinhtrongcongso from '../screens/vocabulary/cacquytrinhtrongcongso';
import congnghechocongso from '../screens/vocabulary/congnghechocongso';
import dientu from '../screens/vocabulary/dientu';
import hoinghi from '../screens/vocabulary/hoinghi';
import kehoachkinhdoanh from '../screens/vocabulary/kehoachkinhdoanh';
import mayvitinh from '../screens/vocabulary/mayvitinh';
import thutin from '../screens/vocabulary/thutin';
import p1 from '../screens/detailsnguphap/1';
import p901 from '../screens/detailsnguphap/901';
import scr1 from '../screens/detailsallpart/scr1';
import scr2 from '../screens/detailsallpart/scr2';
import scr3 from '../screens/detailsallpart/scr3';
import scr4 from '../screens/detailsallpart/scr4';
import scr5 from '../screens/detailsallpart/scr5';
import scr6 from '../screens/detailsallpart/scr6';
import scr7 from '../screens/detailsallpart/scr7';
import scrthithu from '../screens/detailsallpart/scrthithu';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import coban from '../screens/nguphap/coban';
import thongdung from '../screens/nguphap/thongdung';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';

function tobtab() {
  const tobtab = createMaterialTopTabNavigator();
  const insets = useSafeAreaInsets();
  return (
    <tobtab.Navigator
      initialRouteName="NguPhap"
      ScreenOptions={{
        ActiveTintColor: '#FFFFFF',
        labelStyle: {fontSize: 17},
        style: {backgroundColor: '#6699FF', marginTop: insets.top},
      }}>
      <tobtab.Screen
        name="coban"
        component={coban}
        options={{tabBarLabel: 'C?? B???n'}}
      />
      <tobtab.Screen
        name="thongdung"
        component={thongdung}
        options={{tabBarLabel: 'Th??ng D???ng'}}
      />
    </tobtab.Navigator>
  );
}

function HomeStack() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#6699FF"
      barStyle={{backgroundColor: '#FFFFFF'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, padding}) => {
          let iconName;

          if (route.name === 'LuyenTap') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'TuVung') {
            iconName = focused ? 'book' : 'book-outline';
          }
          if (route.name === 'NguPhap') {
            iconName = focused ? 'reader' : 'reader-outline';
          }
          if (route.name === 'aispeak') {
            iconName = focused ? 'language-sharp' : 'language-outline';
          } else if (route.name === 'caidat') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }
          return (
            <Icon
              type="ionicon"
              name={iconName}
              size={size}
              color={color}
              style={{paddingBottom: padding}}
            />
          );
        },
      })}>
      <Tab.Screen
        name="LuyenTap"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Luy???n T???p',
          tabBarOptions: {showIcon: true},
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="TuVung"
        component={TuVungScreen}
        options={{
          tabBarLabel: 'T??? V???ng',
        }}
      />
      <Tab.Screen
        name="NguPhap"
        component={NguPhapScreen}
        options={{
          tabBarLabel: 'Ng??? Ph??p',
        }}
      />
      <Tab.Screen
        name="aispeak"
        component={AIspeakScreen}
        options={{
          tabBarLabel: 'AI n??i',
        }}
      />
      <Tab.Screen
        name="caidat"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'C??i ?????t',
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppStack() {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Part1"
        component={Part1}
        options={{
          headerShown: false,
          title: 'M?? t??? h??nh ???nh',
          backgroundColor: 'transparent',
        }}
      />
      <AppStack.Screen
        name="Part2"
        component={Part2}
        options={{title: 'Part 2', headerShown: false}}
      />
      <AppStack.Screen
        name="Part3"
        component={Part3}
        options={{title: 'Part 3', headerShown: false}}
      />
      <AppStack.Screen
        name="Part4"
        component={Part4}
        options={{title: 'Part 4', headerShown: false}}
      />
      <AppStack.Screen
        name="Part5"
        component={Part5}
        options={{title: 'Part 5', headerShown: false}}
      />
      <AppStack.Screen
        name="Part6"
        component={Part6}
        options={{title: 'Part 6', headerShown: false}}
      />
      <AppStack.Screen
        name="Part7"
        component={Part7}
        options={{title: 'Part 7', headerShown: false}}
      />
      <AppStack.Screen
        name="BoTuVung"
        component={BoTuVung}
        options={{title: '600 T??? V???ng TOEIC', headerShown: false}}
      />
      <AppStack.Screen
        name="ThiThu"
        component={thithu}
        options={{title: 'Thi Th???', headerShown: false}}
      />
      <AppStack.Screen
        name="cacquytrinhtrongcongso"
        component={cacquytrinhtrongcongso}
        options={{title: 'C??c Quy Tr??nh C??ng S???', headerShown: false}}
      />
      <AppStack.Screen
        name="congnghechocongso"
        component={congnghechocongso}
        options={{title: 'C??ng Ngh??? Cho C??ng S???', headerShown: false}}
      />
      <AppStack.Screen
        name="dientu"
        component={dientu}
        options={{title: '??i???n T???', headerShown: false}}
      />
      <AppStack.Screen
        name="hoinghi"
        component={hoinghi}
        options={{title: 'H???i Ngh???', headerShown: false}}
      />
      <AppStack.Screen
        name="hopdong"
        component={hopdong}
        options={{title: 'H???p ?????ng', headerShown: false}}
      />

      <AppStack.Screen
        name="kehoachkinhdoanh"
        component={kehoachkinhdoanh}
        options={{title: 'K??? Ho???ch Kinh Doanh', headerShown: false}}
      />
      <AppStack.Screen
        name="mayvitinh"
        component={mayvitinh}
        options={{title: 'M??y Vi T??nh', headerShown: false}}
      />
      <AppStack.Screen
        name="subaohanh"
        component={subaohanh}
        options={{title: 'S??? B???o H??nh', headerShown: false}}
      />
      <AppStack.Screen
        name="thitruong"
        component={thitruong}
        options={{title: 'Th??? Tr?????ng', headerShown: false}}
      />
      <AppStack.Screen
        name="thutin"
        component={thutin}
        options={{title: 'Th?? T??n', headerShown: false}}
      />
      <AppStack.Screen
        name="1"
        component={p1}
        options={{title: 'C???u tr??c th??nh ph???n m???t c??u', headerShown: false}}
      />
      <AppStack.Screen
        name="901"
        component={p901}
        options={{title: 'C???u tr??c th??nh ph???n m???t c??u', headerShown: false}}
      />
      <AppStack.Screen
        name="scr1"
        component={scr1}
        options={{title: 'scr1', headerShown: false}}
      />
      <AppStack.Screen
        name="scr2"
        component={scr2}
        options={{title: 'scr2', headerShown: false}}
      />
      <AppStack.Screen
        name="scr3"
        component={scr3}
        options={{title: 'scr3', headerShown: false}}
      />
      <AppStack.Screen
        name="scr4"
        component={scr4}
        options={{title: 'scr4', headerShown: false}}
      />
      <AppStack.Screen
        name="scr5"
        component={scr5}
        options={{title: 'scr5', headerShown: false}}
      />
      <AppStack.Screen
        name="scr6"
        component={scr6}
        options={{title: 'scr6', headerShown: false}}
      />
      <AppStack.Screen
        name="scr7"
        component={scr7}
        options={{title: 'scr7', headerShown: false}}
      />
      <AppStack.Screen
        name="scrthithu"
        component={scrthithu}
        options={{title: 'scrthithu', headerShown: false}}
      />
    </AppStack.Navigator>
  );
}
