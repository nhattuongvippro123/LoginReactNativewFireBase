import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import coban from '../screens/coban';
import thongdung from '../screens/thongdung';
import Header from '../components/Header';

export default function NguPhapScreen(navigation) {
  const renderScene = SceneMap({
    first: coban,
    second: thongdung,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Cơ Bản'},
    {key: 'second', title: 'Thông Dụng'},
  ]);
  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="NGỮ PHÁP" />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
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
    color: '#333333',
  },
  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
  },

  title: {
    color: '#FFF',
    marginLeft: 150,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    zIndex: 10,
  },
});
