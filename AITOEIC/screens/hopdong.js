import React,{useState, useEffect, useContext }from 'react';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
// import firebase from '../firebase/config';

import { Flatlist, Image, TouchableOpacity, View, Text, StyleSheet,ImageBackground, SafeAreaView} from 'react-native';

export default function hopdong() {

    const gettuvung = async ()=> {
        var tuvung = [];
        const favor = await firestore()
        .collection('HopDong')
        .get()
        .then(data => {
        console.log('Total tuvung', data.size);
        data.forEach(doc => {
        
        console.log('TuVungSo: ', doc.id, doc.data());
        // var value = data._data;
        sethopdong(doc.data());
    });
  });
    }
 
    const [HopDong, sethopdong] = useState("")

    useEffect(() => {
        gettuvung()
        console.log(HopDong.image[0]);
    }, []);

    return (
        
        <ImageBackground 
                        source = {require('../assets/theme/backgroundapp.jpg')} 
                        style={{width: '100%', height: '100%',}}>
            <SafeAreaView style={styles.background}>
                <Text style={styles.title}>Hợp Đồng</Text>
            </SafeAreaView>
            <TouchableOpacity
                    style = {{flex:1, flexDirection:'row',marginBottom:3,}}
                    activeOpacity={0.5}
                    >

                <View style= {{flex:1, justifyContent:'center', marginLeft:5,}}>
                        <Text style={{fontSize:18, color:'green', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:16, color:'red',}}>
                            {HopDong.phienam}
                            {HopDong.giaithich}
                            {HopDong.nghia}
                            {HopDong.tuloai}
                            {HopDong.vdta}
                            {HopDong.vdtv}
                        </Text>
                        <Image style= {{width:80,height:80,margin:5}}
                       source= {{uri:HopDong.image[0]}}/>
                </View>
            </TouchableOpacity>
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
    color: '#333333'
  },
    background: {
        backgroundColor:'#6699FF',
        width:390,
        justifyContent:'center',
        textAlign:'center',
      },
  title: {
        color: '#FFF',
        marginLeft:140,
        marginBottom:12,
        paddingTop:20,
        fontWeight: "bold",
        fontFamily: "Cochin",
        fontSize: 25,
  },
});