import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView, SafeAreaView,ImageBackground, } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import { StatusBar } from 'react-native';

export default function HomeScreen({navigation}) {

  const { user, logout } = useContext(AuthContext);
  StatusBar.setHidden(true);
  StatusBar.setBarStyle('dark-content')
  return ( 
    <View style={styles.container}>
    
    <ImageBackground source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
                      style={{width: '100%', height: '100%',}}>
    <Header/>
    <ScrollView style = {{width: 360,marginLeft:15,}}
                showsVerticalScrollIndicator={false}>
    <Image 
      source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/banner/toeic.jpg')}
      style = {{ width: 360, height: 110,borderRadius:10,marginTop:9,}} />
    <Text style ={styles.loaitext}>
      Nghe Hiểu
    </Text>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:40,
                  paddingLeft:10,
                  marginLeft:5,
                  }}>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/image.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 1
        </Text>
        <Text style={styles.buttonTextStyle}>
          Mô Tả 
        </Text>
        <Text style={styles.buttonTextStyle}>
          Hình Ảnh
        </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part2')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/part2.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 2
        </Text>
        <Text style={styles.buttonTextStyle}>
          Hỏi &
        </Text>
        <Text style={styles.buttonTextStyle}>
          Đáp
        </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part3')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/part3.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 3
        </Text>
        <Text style={styles.buttonTextStyle}>
          Đoạn 
        </Text>
        <Text style={styles.buttonTextStyle}>
          Hội Thoại
        </Text>
      </View>
       <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part4')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/part4.jpg')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 4
        </Text>
        <Text style={styles.buttonTextStyle}>
          Chuyện 
        </Text>
        <Text style={styles.buttonTextStyle}>
          Ngắn 
        </Text>
      </View>  
    </View>

    <Text style ={{marginBottom:10,
    alignItems:'center',
    paddingTop:23,
    fontWeight:"bold",
    fontFamily: "Cochin",
    fontSize: 17,
    color: 'black'}}>
      Đọc Hiểu
    </Text>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:20,
                  paddingLeft:10,
                  marginLeft:5,
                  }}>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part5')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/part5.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 5
        </Text>
        <Text style={styles.buttonTextStyle}>
          Điền
        </Text>
        <Text style={styles.buttonTextStyle}>
          Vào Câu
        </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part6')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/part6.jpg')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 6
        </Text>
        <Text style={styles.buttonTextStyle}>
          Điền Vào
        </Text>
        <Text style={styles.buttonTextStyle}>
          Đoạn Văn
        </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part7')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/part7.jpg')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 7
        </Text>
        <Text style={styles.buttonTextStyle}>
          Đọc Hiểu
        </Text>
        <Text style={styles.buttonTextStyle}>
          Đoạn Văn
        </Text>
      </View>
       <View style={styles.viewStyleOne}>
      </View>  
    </View>

        <Text style ={styles.loaitext}>
      Thi thử
    </Text>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:20,
                  paddingLeft:10,
                  marginLeft:5,
                  }}>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('thithu')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/thithu.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Thi Thử
        </Text>
      </View>
      <View style={styles.viewStyleOne}>
        {/* <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/thithu.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 1
        </Text> */}
      </View>
      <View style={styles.viewStyleOne}>
        {/* <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/image.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 1
        </Text> */}
      </View>
       <View style={styles.viewStyleOne}>
        {/* <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:70,height:70, borderRadius:10,marginTop:-14,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <Image 
            // source={{
            //   uri:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            // }}
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/image/image.png')}
            style={styles.buttonImageIconStyle}
          />
          
        </TouchableOpacity>
        <Text style={styles.buttonTitleStyle}>
          Part 1
        </Text> */}
      </View>  
    </View>
    
    
    <View style={{paddingTop:20}}>
    <Image 
        source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/banner/banner1.png')}
        style = {{width: 360, height: 200,borderRadius:10,marginLeft:0.5}} />
    </View>
    <Text style ={styles.loaitext}>
      Luyện Thi
    </Text>

    </ScrollView>
    </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaitext: {
    alignItems:'center',
    marginTop:23,
    fontWeight:"bold",
    fontFamily: "Cochin",
    fontSize: 17,
    color: 'black',
  },

  viewStyleOne: {
    marginLeft:-20,
    borderRadius:10,
    width:70,
    height:130,
    justifyContent: 'center',
    alignItems:'center',     
  },
  textStyle:{
    textAlign:'center'
  },

  text: {
    fontSize: 20,
    color: '#333333'
  },
  buttonImageIconStyle: {
    marginTop:15,
    marginLeft:15,
    width:40,
    height:40,
  },
  buttonTitleStyle: {
    paddingTop:7,
    fontWeight:"bold",
    marginBottom: 4,
    color:'#444444',
  },
  buttonTextStyle: {
    marginBottom: 4,
    color:'#777777',
  },
});