import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import FormButton from './../../components/FormButton';
import FormInput from './../../components/FormInput';
import {AuthContext} from './../../navigation/AuthProvider';
import LoginScreen from 'react-native-login-screen';

export default function SignupScreen() {
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./../../assets/banner/logo.png')}
        />
        <Text style={styles.text}>Create an account</Text>
        <FormInput
          value={email}
          placeholderText="Email"
          onChangeText={(userEmail) => setEmail(userEmail)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
        <FormInput
          value={password}
          placeholderText="Password"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
        <FormButton
          buttonTitle="Signup"
          onPress={() => register(email, password)}
        />
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
    fontSize: 24,
    marginBottom: 10,
  },
});
