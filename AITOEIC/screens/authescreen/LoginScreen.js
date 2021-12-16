import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import FormButton from './../../components/FormButton';
import FormInput from './../../components/FormInput';
import {AuthContext} from './../../navigation/AuthProvider';
import LoginScreen from 'react-native-login-screen';

export default function loginScreen({navigation}) {
  const backgroundImage = {
    uri: 'https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
  };
  const [email, setEmail] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

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
        usernameOnChangeText={(userEmail) => setEmail(userEmail)}
        onPressSettings={() => alert('Settings Button is pressed')}
        passwordOnChangeText={(userPassword) => setPassword(userPassword)}
        onPressLogin={() => {
          setSpinnerVisibility(true);
          setTimeout(() => {
            // setSpinnerVisibility(false);
            login(email, password);
          }, 1000);
        }}
        onPressSignup={() => navigation.navigate('Signup')}
      />
    </View>
  );
}
