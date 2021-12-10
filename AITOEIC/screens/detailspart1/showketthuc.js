import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet,ImageBackground} from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import StatusBars from '../components/StatusBars';
import { Text,Header } from 'react-native-elements';
import FormButton from '../components/FormButton'
import { useNavigation} from '@react-navigation/native';

export default function showketthuc(navigation) {



  
  navigation = useNavigation();
  const [titlepart1, setTitlepart1] = useState('');

  const gettitle = async () =>{
        
      firestore()
      .collection('Quizzes')
      .doc('part1')
      .get()
      .then(documentSnapshot => {
          console.log('title data: ', documentSnapshot.data());
          setTitlepart1(documentSnapshot.data());
      });
  }

  useEffect(() => {
    gettitle()
  }, [])

  return (
      <ImageBackground source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
                      style={{width: '100%', height: '100%',}}>
        <View style={styles.container}>
          <View style={{flexDirection:'column',}}>
            <View style={[styles.shadowContainerStyle,{flex:2, width: 360, margin:20, height: 200,alignItems:'center',backgroundColor:'#FFF',justifyContent:'center',}]}>
              <Text h4>
              Câu hỏi:
              </Text>
              <Text style={{margin:10, fontSize:17, textAlign:'center',color:'#000044',}}>{titlepart1.titleta}</Text>
              <Text style={{margin:10, fontSize:17, textAlign:'center',color:'#000044',}}>{titlepart1.titletv}</Text>
            </View>
            <View style={{flex:1,alignItems:'center',}}>
            <FormButton buttonTitle="Bắt đầu"
                        onPress={() => navigation.navigate('scr1')}/>
            </View>
          </View>
        </View>
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
  
  shadowContainerStyle: {   //<--- Style with elevation
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});