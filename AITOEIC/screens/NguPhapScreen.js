import React from 'react';
import { SafeAreaView, View, Text, StyleSheet,ImageBackground} from 'react-native';



export default function NguPhapScreen(navigation) {

  return (
     <ImageBackground 
                      source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
                      style={{width: '100%', height: '100%',}}>
          <SafeAreaView style={styles.background}>
            <Text style={styles.title}>Ngữ Pháp</Text>
          </SafeAreaView>         
        <View style={styles.container}>
          <Text>s</Text>
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

});