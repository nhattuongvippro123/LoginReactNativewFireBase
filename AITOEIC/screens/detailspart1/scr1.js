import React, { useState, useEffect, useRef} from 'react';
import { View, StyleSheet,ImageBackground,Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Text,Header } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';

export default function scr1() {

    const [correctcount, setCorrectCount] = useState(0);
    const [incorrectcount, setInCorrectCount] = useState(0);
    const [over, setOver] = useState(false);
    const [TOTAL_QUESTION] = useState(10);
    const [optiondata, setOptionData] = useState([])
    const [images, setImages] = useState('')
    const [totaldata, setTotalData] = useState('')
    const [ispressedA, setIsPressedA] = useState(false)
    const [ispressedB, setIsPressedB] = useState(false)
    const [ispressedC, setIsPressedC] = useState(false)
    const [ispressedD, setIsPressedD] = useState(false)

    const getOptionColor = (ispressed) => {
        if(ispressed == true){
            
        }
    }
    const shuffleArray = (array) => {
        for (let i = array.length-1; i>0;i--){
            let j = Math.floor(Math.random()*(i+1));

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    const getoption = async () =>{
        
        let tempoption = [];
        firestore()
        .collection('Quizzes')
        .doc('part1')
        .collection('cau1')
        .doc('1')
        .get()
        .then(data => {
            const optiondata = data.data();
            optiondata.allOptions = shuffleArray([
            ...optiondata.options
            ]);
            tempoption.push(optiondata);
            console.log([...tempoption]);
            setOptionData([...tempoption]);
            setImages(optiondata);
            setTotalData(optiondata);
            console.log('Tongdata:',totaldata);
        });

        
    }
    useEffect(() => {
        getoption()
    }, [])



    return (
        <ImageBackground 
            source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
            style={{width: '100%', height: '100%',}}>
                <View style={[styles.shadowContainerStyle,{width: 350, margin:20, height: 700,backgroundColor:'#FFF'}]}>
                    <View style={{justifyContent:'center',backgroundColor:'#6699FF', width:'92%',marginBottom:10,marginTop:10,marginLeft:10,borderTopLeftRadius:10,borderTopRightRadius:10,}}>
                    <Text style={{margin:10, fontSize:20, textAlign:'center',color:'#FFF', fontWeight:'bold',}}>Select the answer: </Text>
                    </View>
                    <View style={{marginLeft:10,}}>
                    <Image
                        source={{ uri: images.image}}
                        style={{ height: 250, width: 320,borderRadius:5, }}/>
                    </View>
                    
                    <View style={{marginTop:20,marginLeft:10}}>
                    {/* {option.allOption.map(({option},index)=> 
                    <TouchableOpacity 
                        key={index} 
                        style = {styles.buttona} 
                        onPress={() =>{
                            if (option.selectedOption){
                                return null;    
                            }
                            if (option == option.correct_answer){

                                setCorrectCount(correctcount+1)

                            }
                            else{
                                setInCorrectCount(incorrectcount+1)
                                backgroundColor: "#33FF99"
                            }
                        }}>
                        <View style={{
                        paddingHorizontal:20,
                        paddingBottom:20,
                        paddingTop:20,}}>

                        </View>
                    </TouchableOpacity>)} */}
                    
                    <TouchableHighlight
                                    style = {[styles.buttona,ispressedA ? { backgroundColor: "red" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedA(true)}}
                                    onPress={() => {   console.log('PressedA');
                                                       if(totaldata.optionA == totaldata.correct_answer){
                                                           console.log('Right') ;                                             
                                                           setCorrectCount(correctcount+1);
                                                           console.log('correctcount: ',correctcount);      
                                                       }else{
                                                           console.log('wrong');
                                                           setInCorrectCount(incorrectcount+1);
                                                           console.log('sai: ',incorrectcount);
                                                       }
                                                       }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionA}
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.buttona,ispressedB ? { backgroundColor: "red" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedB(true)}}
                                    onPress={() => {   console.log('PressedB');
                                                        if(totaldata.optionB == totaldata.correct_answer){
                                                            console.log('Right') ;                                             
                                                            setCorrectCount(correctcount+1);
                                                            console.log('correctcount: ',correctcount);      
                                                        }else{
                                                            console.log('wrong');
                                                            setInCorrectCount(incorrectcount+1);
                                                            console.log('sai: ',incorrectcount);
                                                        }
                                                        }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionB}
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.buttona, ispressedC ? { backgroundColor: "#33FF99" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedC(true)}}
                                    onPress={() => {   console.log('PressedC');
                                                       if(totaldata.optionC == totaldata.correct_answer){
                                                           console.log('Right') ;                                             
                                                           setCorrectCount(correctcount+1);
                                                           console.log('correctcount: ',correctcount);      
                                                       }else{
                                                           console.log('wrong');
                                                           setInCorrectCount(incorrectcount+1);
                                                           console.log('sai: ',incorrectcount);
                                                       }
                                                       }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionC}
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.buttona,ispressedD ? { backgroundColor: "red" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedD(true)}}
                                    onPress={() => {   console.log('PressedD');
                                                       if(totaldata.optionD == totaldata.correct_answer){
                                                           console.log('Right') ;                                             
                                                           setCorrectCount(correctcount+1);
                                                           console.log('dung: ',correctcount);      
                                                       }else{
                                                           console.log('wrong');
                                                           setInCorrectCount(incorrectcount+1);
                                                           console.log('sai: ',incorrectcount);
                                                       }
                                                       }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionD}
                            </Text>
                    </TouchableHighlight>
                        
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
    buttona: {
        marginBottom:10,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFC',
        borderWidth: 1,
        borderColor: "#20232a",borderRadius:40,height:60,width:60,
    },

    text: {
        fontSize: 20,
        color: '#333333'
    },
    shadowContainerStyle: {   //<--- Style with elevation
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
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