import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  LogBox,
} from 'react-native';
import FormButton from './../../components/FormButton';
import FormInput from './../../components/FormInput';
import {AuthContext} from './../../navigation/AuthProvider';
import LoginScreen from 'react-native-login-screen';
import Loading from './../../components/Loading';

export default function loginScreen({navigation}) {
  const backgroundImage = {
    uri: 'https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
  };
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  const {register} = useContext(AuthContext);
  LogBox.ignoreAllLogs();
  const renderLogo = () => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}>
      <Image
        resizeMode="contain"
        source={require('./../../assets/banner/logo.png')}
        style={{height: 400, width: 400}}
      />
      <Text
        style={{
          bottom: 32,
          color: '#fdfdfd',
          fontFamily: 'Now-Bold',
          fontSize: 32,
          shadowRadius: 3,
          shadowOpacity: 0.7,
          shadowColor: '#757575',
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}>
        Đăng nhập tài khoản
      </Text>
    </View>
  );
  return (
    <View>
      <LoginScreen
        source={require('./../../assets/theme/backgroundapp.jpg')}
        spinnerEnable
        spinnerVisibility={spinnerVisibility}
        logoComponent={renderLogo()}
        labelTextStyle={{
          color: '#adadad',
          fontFamily: 'Now-Bold',
        }}
        logoTextStyle={{
          fontSize: 20,
          color: '#fdfdfd',
          fontFamily: 'Now-Black',
        }}
        loginButtonTextStyle={{
          color: '#fdfdfd',
          fontFamily: 'Now-Bold',
        }}
        textStyle={{
          color: '#757575',
          fontFamily: 'Now-Regular',
        }}
        signupStyle={{
          color: '#fdfdfd',
          fontSize: 16,
          fontFamily: 'Now-Bold',
        }}
        spinnerSize={40}
        loginButtonBackgroundColor={282828}
        loginText={'Đăng Nhập'}
        usernameTitle={'Email'}
        passwordTitle={'Mật Khẩu'}
        usernamePlaceholder={'abc@gmail.com'}
        passwordPlaceholder={'********'}
        disableSettings={true}
        usernameTextInputValue={email}
        passwordTextInputValue={password}
        usernameOnChangeText={(userEmail) => setEmail(userEmail)}
        onPressSettings={() => alert('Settings Button is pressed')}
        passwordOnChangeText={(userPassword) => setPassword(userPassword)}
        onPressLogin={() => {
          setSpinnerVisibility(true);
          setTimeout(() => {
            setSpinnerVisibility(false);
            login(email, password);
          }, 1000);
        }}
        onPressSignup={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
}
