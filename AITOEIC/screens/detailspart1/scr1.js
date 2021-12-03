import React, { useState, useEffect, useRef} from 'react';
import { View, StyleSheet,ImageBackground,Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Text,Header } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import COLORSS from './colors';


export default function scr1() {

    const [correctcount, setCorrectCount] = useState(1);
    const [incorrectcount, setInCorrectCount] = useState(1);
    const [over, setOver] = useState(false);
    const [TOTAL_QUESTION] = useState(10);
    const [optiondata, setOptionData] = useState([])
    const [images, setImages] = useState('')
    const [totaldata, setTotalData] = useState('')
    const [ispressedA, setIsPressedA] = useState(false)
    const [ispressedB, setIsPressedB] = useState('')
    const [ispressedC, setIsPressedC] = useState('')
    const [ispressedD, setIsPressedD] = useState('')
    const [correctA, setCorrectA] = useState(false)
    const [selected,setSelected] = useState()
    const [flag,setFlag] = useState(false)
    const handleSelection = () => {
        
    }
    const getOptionColor = () => {
        if(correctA){
            let backgroundColor: "#33FF99";
            return backgroundColor
        }else{
            let backgroundColor: "#EE2C2C";
            return backgroundColor
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
            // console.log('Da xao tron:',[...tempoption]);
            setOptionData([...tempoption]);
            setImages(optiondata);
            setTotalData(optiondata);
            // console.log('Tongdata:',optiondata);
        });

        
    }
    useEffect(() => {
        getoption()
    }, [])
    const handleAnswer = (item,index) =>{
        console.log(optiondata[0].correct_answer)
        console.log(item);
            setSelected(index)
            setFlag(false)
        if(item == optiondata[0].correct_answer){
            setFlag(true)
        }
    }
    // let randomoption = totaldata.allOptions[Math.floor(Math.random() * totaldata.allOptions.length)]

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
                    
                    {optiondata[0]?.allOptions?.map((item,index)=>{
                        return(
                            <TouchableHighlight 
                            key={index}
                                    style = {[styles.buttona,selected == index ? {backgroundColor: flag == true ? "green" : "red"} :{}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onPress={()=>handleAnswer(item,index)}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,
                            
                            }}>
                                {item}
                            </Text>
                    </TouchableHighlight>
                        )
                    })}
                    
                    {/* <TouchableHighlight
                                    style = {[styles.buttona,ispressedA ? {backgroundColor:getOptionColor()} :{}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onPress={() => {    console.log('PressedA');                                                       
                                                        if(totaldata.allOptions[0] == totaldata.correct_answer){
                                                            console.log('Right') ;                                             
                                                            setCorrectCount(correctcount+1);
                                                            setIsPressedA(true);
                                                            setCorrectA(true);
                                                            console.log('dem cau dung:  ',correctcount);                                                                 
                                                        }else{
                                                            console.log('wrong');
                                                            setInCorrectCount(incorrectcount+1);
                                                            console.log('dem cau sai: ',incorrectcount);
                                                            setIsPressedA(null);
                                                        }
                                                        }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionA}
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.buttona,ispressedB ? { backgroundColor: "#33FF99" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedB(true)}}
                                    onPress={() => {   console.log('PressedB');
                                                        if(totaldata.allOptions[1] == totaldata.correct_answer){
                                                            console.log('Right') ;                                             
                                                            setCorrectCount(correctcount+1);
                                                            console.log('correctcount: ',correctcount); 
                                                            setIsPressedB(true);     
                                                        }else{
                                                            console.log('wrong');
                                                            setInCorrectCount(incorrectcount+1);
                                                            console.log('sai: ',incorrectcount);
                                                            setIsPressedB(null);
                                                        }
                                                        }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionB}
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.buttona,ispressedC ? { backgroundColor: "#33FF99" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedC(true)}}
                                    onPress={() => {   console.log('PressedC');
                                                       if(totaldata.allOptions[2] == totaldata.correct_answer){
                                                           console.log('Right') ;                                             
                                                           setCorrectCount(correctcount+1);
                                                           console.log('correctcount: ',correctcount);
                                                           setIsPressedC(true); 
                                                       }else{
                                                           console.log('wrong');
                                                           setInCorrectCount(incorrectcount+1);
                                                           console.log('sai: ',incorrectcount);
                                                           setIsPressedC(null);
                                                       }
                                                       }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionC}
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {[styles.buttona,ispressedD ? { backgroundColor: "#33FF99" } : {}]}
                                    activeOpacity={0.5}
                                    underlayColor='#00000000'
                                    onShowUnderlay={() => {setIsPressedD(true)}}
                                    onPress={() => {   console.log('PressedD');
                                                       if(totaldata.allOptions[3] == totaldata.correct_answer){
                                                           console.log('Right') ;                                             
                                                           setCorrectCount(correctcount+1);
                                                           console.log('dung: ',correctcount);
                                                           setIsPressedD(true)    
                                                       }else{
                                                           console.log('wrong');
                                                           setInCorrectCount(incorrectcount+1);
                                                           console.log('sai: ',incorrectcount);
                                                           setIsPressedD(false)
                                                       }
                                                       }}
                                    >
                            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,}}>
                                {totaldata.optionD}
                            </Text>
                    </TouchableHighlight> */}
                        
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