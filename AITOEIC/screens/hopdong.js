import React,{useState, useEffect, useContext, useRef}from 'react';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";

// import firebase from '../firebase/config';

import { TouchableWithoutFeedback,Dimensions,ScrollView, Animated,Flatlist, Image, TouchableOpacity, View, Text, StyleSheet,ImageBackground, SafeAreaView} from 'react-native';

export default function hopdong() {
    const [HopDong, sethopdong] = useState('')  
    const [isModalVisible, setModalVisible] = useState(true);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const gettuvung = async ()=> {
        const favor = await firestore()
        .collection('HopDong')
        .doc('1')
        .get()
         .then(documentSnapshot => {
          console.log('data:', documentSnapshot.data());
          sethopdong(documentSnapshot.data());
      });
    }

        useEffect(() => {
        gettuvung()
        docaudio()
        }, []);

          
          var Sound = require('react-native-sound')
          var audiofb = HopDong.audiotv;
          const audioo = new Sound(audiofb,(error) => {        
          if (error) {
          console.log('failed to load the sound', error);
          return;
          }
          });

          const play = () => {
          audioo.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      };
      const docaudio = ()=> {
          audioo.setVolume(1);
          return () => {
          audioo.release();
        };
      }
   

    return (
        
        <ImageBackground 
                        source = {require('../assets/theme/backgroundapp.jpg')} 
                        style={{width: '100%', height: '100%',}}>
            <SafeAreaView style={styles.background}>
                <Text style={styles.title}>Hợp Đồng</Text>
            </SafeAreaView>

            <ScrollView>

            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
            <View style = {{flexDirection:'row',}}>
            <TouchableOpacity
                    style = {{flex:2, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,}}
                    activeOpacity={0.5}
                    onPress={() => {toggleModal()}}>
                    <View style = {{padding:5,}}>
                    <Image
                      source={{ uri: HopDong.image}}
                      style={{ height: 100, width: 120, padding:5,borderRadius:10, }}/>
                    </View>
                    <View style= {{flex:1, justifyContent:'center', marginLeft:10,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:15,}}>
                            {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                            {HopDong.phienam}
                        </Text>
                        
                    </View>
                    
            </TouchableOpacity> 
            <View
                    style = {{flex:1, flexDirection:'row',marginBottom:3,backgroundColor:'#FFFC',width:700,height:110,justifyContent:'center',}}>
              <TouchableOpacity style = {{padding:5,justifyContent:'center',marginLeft:5,marginTop:30,backgroundColor:'#FFFC',borderWidth: 2,
                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                activeOpacity={0.5}
                                onPress={play}>
                    <Text style={{justifyContent:'center',marginLeft:3,}}>
                        <Icon  style={{justifyContent:'center',marginLeft:5,}} name="sound" size={30} color="#6699FF" />
                    </Text>
              </TouchableOpacity>

            </View>
            </View>
            <Modal
              style={{ borderRadius:30,marginTop: 200,margin: 0,backgroundColor:'#FFFF', }}
              isVisible={!isModalVisible}
              // onSwipeComplete={() => setModalVisible(true)}
              onBackdropPress={() => setModalVisible(true)}
              // swipeDirection="down"
              propagateSwipe={false}

            >
                <View style={{flexDirection:"row",backgroundColor:'#FFFC',borderRadius:30,}} >
                    <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',marginTop:10, borderBottomColor: '#C0C0C0',borderBottomWidth: 1,}}>         
                        <TouchableOpacity style = {{padding:7,justifyContent:'center',marginLeft:6,height:50,width:60,}}
                                          activeOpacity={0.5}
                                          onPress={() =>setModalVisible(true)}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{marginBottom:12,padding:5,}} name="close" size={28} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor:'#FFFC',borderRadius:30,}}> 
                  <View style={{flexDirection:"column"}}>
                    
                    <View style={{flex:1,flexDirection:"row",marginTop:30,}}>
                      <View style={{flex:1,marginLeft:20}}>
                        <TouchableOpacity style = {{padding:5,justifyContent:'center',marginTop:5,borderWidth: 2,
                                                      borderColor: "#20232a",borderRadius:30,height:50,width:50,}}
                                          activeOpacity={0.5}
                                          onPress={play}>   
                              <Text style={{justifyContent:'center',marginLeft:3,}}>
                                  <Icon  style={{justifyContent:'center',}} name="sound" size={30} color="#6699FF" />
                              </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex:5,marginLeft:5,}}>
                        <Text style={{fontSize:20, color:'#6699FF',fontWeight:'bold', marginBottom:2,}}>
                          {HopDong.name}
                        </Text>
                        <Text style={{fontSize:20, color:'#333366',}}>
                          {HopDong.phienam}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginTop:18,alignItems:'center',}}>  
                        <Image
                          source={{ uri: HopDong.image}}
                          style={{ height: 150, width: 180, padding:5,margin:10, }}/>    
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,}}>  
                      <Text style={{fontSize:20, color:'#333366',textDecorationLine: 'underline',fontStyle: 'italic'}}>
                            {HopDong.tuloai}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#66CCFF',}}>
                            {HopDong.nghia}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:18,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20, color:'#222222',}}>
                            1. {HopDong.giaithich}
                      </Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',marginLeft:40,marginTop:18,padding:5}}>  
                      <Text style={{fontSize:20,fontStyle: 'italic',color:'#808080',}}>
                            Ví dụ:
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:10,padding:5}}>
                            {HopDong.vdta}
                      </Text>
                      <Text style={{fontSize:20,color:'#222222',marginTop:5,padding:5}}>
                            {HopDong.vdtv}
                      </Text>
                    </View>
                  </View>

                </ScrollView>
            </Modal>
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