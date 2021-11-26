import React, { useContext } from 'react';
import { ScrollView,SafeAreaView, View, Text, StyleSheet,ImageBackground,TouchableOpacity,} from 'react-native';

export default function coban(navigation) {

  const settingsOption =[
        {title: "Cấu trúc chung của một câu",subTitle:"1", onPress:() => {}},
        {title: "Noun phrase (ngữ danh từ)",subTitle:"2", onPress:() => {}},
        {title: "Verb phrase (ngữ động từ)",subTitle:"3", onPress:() => {}},
        {title: "Sự hòa hợp giữa chủ ngữ và động từ",subTitle:"4", onPress:() => {}},
        {title: "Đại từ",subTitle:"5", onPress:() => {}},
        {title: "Tân ngữ (complement / object) và các vấn đề liên quan",subTitle:"6", onPress:() => {}},
        {title: "Một số động từ đặc biệt( need, dare, to be, get)",subTitle:"7", onPress:() => {}},
        {title: "Câu hỏi",subTitle:"8", onPress:() => {}},
        {title: "Lối nói phụ họa",subTitle:"9", onPress:() => {}},
        {title: "Câu phủ định(negation)",subTitle:"10", onPress:() => {}},
        {title: "Câu mệnh lệnh",subTitle:"11", onPress:() => {}},
        {title: "Các trợ động từ(Modal Auxiliaries)",subTitle:"12", onPress:() => {}},
        {title: "Câu điều kiện",subTitle:"13", onPress:() => {}},
        ]

  return (
        <ImageBackground 
                      source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
                      style={{width: '100%', height: '100%',}}>        
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {settingsOption.map(({title,subTitle,onPress},index)=> 
      <TouchableOpacity key={title} onPress={onPress}>
        <View style={{
          flexDirection:'row',
          paddingHorizontal:20,
          paddingBottom:20,
          paddingTop:20,}}>
          <View style={{
            flex:1,
            backgroundColor:'#FFFF',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
          }}>
          {subTitle && <Text style={{fontWeight:'bold',fontSize:20,}}>{subTitle}</Text>}
          </View>
          <View style={{
            flex:7,marginLeft:10,justifyContent:'center',
          }}>
          <Text style={styles.text}>{title}</Text>
          </View>
        </View>
        <View style={styles.Viewborder}>
        </View>
      </TouchableOpacity>)}
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
    fontSize: 20,
    color: '#000044'
  },
  background: {
        backgroundColor:'#6699FF',
        width:390,
        justifyContent:'center',
        textAlign:'center',
      },

  title: {
        color: '#FFF',
        marginLeft:150,
        marginBottom:12,
        paddingTop:20,
        fontWeight: "bold",
        fontFamily: "Cochin",
        fontSize: 25,
        alignItems:"center",
        justifyContent:"center",
        shadowOpacity:0.2,
        shadowRadius:15,
        zIndex:10,
  },
  Viewborder: {
    
    height:0.5,
    backgroundColor:'#000099', 
  },

});