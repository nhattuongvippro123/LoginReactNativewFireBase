import React from 'react';
import { HeaderBackButton, View, Text, StyleSheet,ImageBackground,SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';

export default function Part1({navigation}) {
  return (
       <ImageBackground 
                      source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
                      style={{width: '100%', height: '100%',}}>
        <SafeAreaView style={styles.background}>
            <Text style={styles.title}>600 Từ Vựng TOEIC</Text>
        </SafeAreaView>
        <ScrollView>
        
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('hopdong')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/imagetuvung/contact.jpg")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,shadowOpacity: 1, shadowRadius: 1, elevation: 2,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style ={{flexDirection: 'row',}}>
          <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style = {{width:180,height:200,marginTop:20,marginLeft:10,}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Part1')}
          >
          <ImageBackground source={require("G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png")} style={{}}>
            <Text style={styles.tuvungtext}> Hợp Đồng </Text>
            <Text style={styles.sotu}> 12 Từ </Text>
          </ImageBackground>
        </TouchableOpacity>
        </View>

        </ScrollView>
      </ImageBackground>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin:20,
    fontSize: 20,
    color: '#333333'
  },
  
  sotu: {
    marginLeft:10,
    marginBottom:10,
    fontSize: 20,
    color: '#FFFF00'
  },
  tuvungtext: {
    marginTop:130,
    marginLeft:10,
    fontSize: 20,
    fontWeight:'bold',
    color: '#FFFF'
  },

  background: {
        backgroundColor:'#6699FF',
        width:390,
        justifyContent:'center',
        textAlign:'center',
      },

  title: {
        color: '#FFF',
        marginLeft:92,
        marginBottom:12,
        paddingTop:20,
        fontWeight: "bold",
        fontFamily: "Cochin",
        fontSize: 25,
  },

    buttonImageIconStyle: {
        width:300,
  },
});