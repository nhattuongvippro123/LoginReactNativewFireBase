import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView,} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { useTheme } from '@react-navigation/native';


export default function SettingScreen() {
  const { user, logout } = useContext(AuthContext);
  const theme = useTheme()
  const settingsOption =[
        {title: "Tài khoản",subTitle:user.email, onPress:() => {}},
        {title: "Hướng dẫn sử dụng AITOEIC",subTitle:"chi tiết", onPress:() => {}},
        {title: "Ngôn ngữ ứng dụng",subTitle:"VN", onPress:() => {}},
        {title: "Tham gia cộng đồng AITOEIC", onPress:() => {}},
        {title: "Chia sẻ ứng dụng", onPress:() => {}},
        {title: "Nhắc nhở học tập", onPress:() => {}},
        {title: "Phản hồi & hỗ trợ", onPress:() => {}},
        {title: "Đánh giá 5 sao", onPress:() => {}},
        {title: "Điều khoản ứng dụng", onPress:() => {}},
        {title: "Phiên bản",subTitle:"1.1.1", onPress:() => {}},
        {title: "Đăng xuất", onPress:() => logout()},

  ]
  return (
    <View>
      <Text style={styles.caidattext}>
        Cài Đặt
      </Text>
      <ScrollView style={styles.scrollView}>
      {settingsOption.map(({title,subTitle,onPress},index)=> 
      <TouchableOpacity key={title} onPress={onPress}>
        <View style={{
          paddingHorizontal:20,
          paddingBottom:20,
          paddingTop:20,}}>
          <Text style={styles.text}>{title}</Text>
          {subTitle && <Text>{subTitle}</Text>}
        </View>
        <View style={styles.Viewborder}>

        </View>
      </TouchableOpacity>)}
      </ScrollView>
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCFFFF'
  },

  caidattext: {
    paddingHorizontal:150,
    paddingTop:15,
    marginBottom:-50,
    fontWeight: "bold",
    fontFamily: "Cochin",
    fontSize: 25, 
  },

  Viewborder: {
    
    height:0.5,
    backgroundColor:'#adb5bd', 
  },
  scrollView: {
    marginTop:50,
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});