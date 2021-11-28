import React, { useContext } from 'react';
import { ScrollView,SafeAreaView, View, Text, StyleSheet,ImageBackground,TouchableOpacity,} from 'react-native';

export default function thongdung(navigation) {
  const settingsOption =[
        {title: "Present simple",subTitle:"1", onPress:() => {}},
        {title: "Present continuous",subTitle:"2", onPress:() => {}},
        {title: "Present continuous and present simple (1)",subTitle:"3", onPress:() => {}},
        {title: "Present continuous and present simple (2)",subTitle:"4", onPress:() => {}},
        {title: "Past simple",subTitle:"5", onPress:() => {}},
        {title: "Past continuous",subTitle:"6", onPress:() => {}},
        {title: "Present perfect (1)",subTitle:"7", onPress:() => {}},
        {title: "Present perfect (2)",subTitle:"8", onPress:() => {}},
        {title: "Present perfect continuous",subTitle:"9", onPress:() => {}},
        {title: "Present perfect continuous and simple",subTitle:"10", onPress:() => {}},
        {title: "How long have you been ?",subTitle:"11", onPress:() => {}},
        {title: "When? How long? For and Since",subTitle:"12", onPress:() => {}},
        {title: "Present perfect and past (1)",subTitle:"13", onPress:() => {}},
        {title: "Present perfect and past (2)",subTitle:"14", onPress:() => {}},
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
    color: '#000099'
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