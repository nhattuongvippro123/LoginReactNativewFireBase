import React, {useContext} from 'react';
import {
  Share,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions,
  Linking,
} from 'react-native';
import FormButton from './../../components/FormButton';
import {AuthContext} from './../../navigation/AuthProvider';
import {useTheme} from '@react-navigation/native';
import Header from './../../components/Header';

export default function SettingScreen() {
  const {user, logout} = useContext(AuthContext);
  const theme = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          '"https://play.google.com/store/apps/details?id=com.eup.aitoeic"',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const handleOpenLink = async (url) => {
    try {
      await Linking.openURL('https://www.facebook.com/nmntuong160399/');
    } catch {
      throw new Error('URI cant open:' + url);
    }
  };

  const settingsOption = [
    {title: 'Tài khoản', subTitle: user.email, onPress: () => {}},
    {
      title: 'Hướng dẫn sử dụng AITOEIC',
      subTitle: 'chi tiết',
      onPress: () => {},
    },
    {title: 'Ngôn ngữ ứng dụng', subTitle: 'VN', onPress: () => {}},
    {
      title: 'Tham gia cộng đồng AITOEIC',
      onPress: () => {
        handleOpenLink();
      },
    },
    {
      title: 'Chia sẻ ứng dụng',
      onPress: () => {
        handleShare();
      },
    },
    {title: 'Nhắc nhở học tập', onPress: () => {}},
    {
      title: 'Phản hồi & hỗ trợ',
      onPress: () => {
        handleOpenLink();
      },
    },
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
        <Image
          source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/banner.png')}
          style={{
            width: windowWidth,
            height: 110,
            borderRadius: 10,
          }}
        />
        {settingsOption.map(({title, subTitle, onPress}, index) => (
          <TouchableOpacity
            style={{borderBottomWidth: 0.5, marginTop: 5}}
            key={title}
            onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={styles.text}>{title}</Text>
              {subTitle && <Text>{subTitle}</Text>}
            </View>
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
