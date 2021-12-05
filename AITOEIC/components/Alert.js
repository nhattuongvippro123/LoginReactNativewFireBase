import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import React, {useState, useEffect, useRef} from 'react';

const Alert = (props) => {
  const {showAlert} = props;
  const [setAlert] = useState(false);
  
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title="AwesomeAlert"
      message="I have a message for you!"
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText="No, cancel"
      confirmText="Yes, delete it"
      confirmButtonColor="#DD6B55"
      onCancelPressed={() => {
        HideAlert();
      }}
      onConfirmPressed={() => {
        HideAlert();
      }}
    />
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
    height: 100,
  },
  title: {
    color: '#FFF',
    marginLeft: 150,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },
});
export default Header;
