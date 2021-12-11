import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {useTheme} from '@react-navigation/native';
import Header from '../components/Header';

export default function SettingScreen() {
  const {user, logout} = useContext(AuthContext);
  const theme = useTheme();
  const settingsOption = [
    {title: 'Tài khoản', subTitle: user.email, onPress: () => {}},
    {
      title: 'Hướng dẫn sử dụng AITOEIC',
      subTitle: 'chi tiết',
      onPress: () => {},
    },
    {title: 'Ngôn ngữ ứng dụng', subTitle: 'VN', onPress: () => {}},
    {title: 'Tham gia cộng đồng AITOEIC', onPress: () => {}},
    {title: 'Chia sẻ ứng dụng', onPress: () => {}},
    {title: 'Nhắc nhở học tập', onPress: () => {}},
    {title: 'Phản hồi & hỗ trợ', onPress: () => {}},
    {title: 'Đánh giá 5 sao', onPress: () => {}},
    {title: 'Điều khoản ứng dụng', onPress: () => {}},
    {title: 'Phiên bản', subTitle: '1.1.1', onPress: () => {}},
    {title: 'Đăng xuất', onPress: () => logout()},
  ];
  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="CÀI ĐẶT" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {settingsOption.map(({title, subTitle, onPress}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={styles.text}>{title}</Text>
              {subTitle && <Text>{subTitle}</Text>}
            </View>
            <View style={styles.Viewborder}></View>
          </TouchableOpacity>
        ))}
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

  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
  },
  caidattext: {
    color: '#FFF',
    marginLeft: 150,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },

  Viewborder: {
    height: 0.5,
    backgroundColor: '#adb5bd',
  },
  scrollView: {},
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
