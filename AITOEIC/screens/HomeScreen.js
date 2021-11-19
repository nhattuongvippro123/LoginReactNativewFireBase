import React, { useContext } from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity,Image,ScrollView} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

export default function HomeScreen({navigation}) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <Text style={styles.luyentaptext}>AITOEIC</Text>
    <ScrollView style = {{width: 360,marginLeft:1,marginTop:12,backgroundColor: '#CCFFFF'}}
                showsVerticalScrollIndicator={false}>
    <Image 
      source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/banner/banner1.png')}
      style = {{ width: 360, height: 110,borderRadius:10,}} />
    <Text style ={styles.loaitext}>
      Nghe Hiểu
    </Text>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:20,
                  }}>
      <View style={styles.viewStyleOne}>
        <TouchableOpacity
          style = {{backgroundColor:"#FFFFFF",width:86,height:84, borderRadius:10,}}
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
            Mô Tả Ảnh
          </Text>
          
      </View>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 2 </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 3 </Text>
      </View>
       <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 4 </Text>
      </View>
    </View>

    <Text style ={styles.loaitext}>
      Đọc Hiểu
    </Text>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:20,
                  }}>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 1 </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 2 </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 3 </Text>
      </View>
        <View style={styles.viewStyleBlind}>
        <Text style={styles.textStyle}> </Text>
      </View>
    </View>

    <Text style ={styles.loaitext}>
      Luyện Thi
    </Text>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:20,
                  }}>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 1 </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 2 </Text>
      </View>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 3 </Text>
      </View>
       <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 4 </Text>
      </View> 
    </View>
    <View style={{
                  flex: 1,
                  flexDirection:'row', 
                  justifyContent: 'space-around',
                  alignItems:'center',
                  paddingTop:5,
                  }}>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 1 </Text>
      </View>
      <View style={styles.viewStyleBlind}>
        <Text style={styles.textStyle}></Text>
      </View>
      <View style={styles.viewStyleBlind}>
        <Text style={styles.textStyle}></Text>
      </View>
        <View style={styles.viewStyleBlind}>
        <Text style={styles.textStyle}></Text>
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  luyentaptext: {
    paddingTop:15,
    fontWeight: "bold",
    fontFamily: "Cochin",
    fontSize: 25,
  },
  loaitext: {
    alignItems:'center',
    paddingTop:15,
    fontWeight:"bold",
    fontFamily: "Cochin",
    fontSize: 20,
  },

  viewStyleOne: {
    borderRadius:10,
    width:86,
    height:130,
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor: '#BBBBBB',    
  },

  viewStyleBlind: {
    width:86,
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
    margin: 12,
    padding:30,
    width:30,
    height:40,
  },
  buttonTitleStyle: {
    fontWeight:"bold",
    marginBottom: 4,
  },
  buttonTextStyle: {

    marginBottom: 4,
  },

  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    height:40,
    borderRadius: 5,
    margin: 5,
  },
  
});