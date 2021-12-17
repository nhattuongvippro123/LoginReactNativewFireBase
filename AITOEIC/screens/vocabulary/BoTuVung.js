import React, {useState, useEffect, useRef} from 'react';
import {
  HeaderBackButton,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import Header from './../../components/Header';
import firestore from '@react-native-firebase/firestore';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default function BoTuVung({navigation}) {
  const [loaddataxong, setLoadDataXong] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arr, setTatCaData] = useState([]);
  const scrollRef = useRef();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const backtotopscrollview = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const getdata = async () => {
    let arr = [];
    try {
      setLoading(true);
      const favor = await firestore().collection('Vocabulary').get();
      favor.docs.forEach(async (doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTatCaData(arr);
      setLoadDataXong(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!loaddataxong) {
      getdata();
      backtotopscrollview();
      console.log();
    }
  }, []);
  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="BỘ TỪ VỰNG" />
      <FlatList
        // horizontal

        style={{padding: 5}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={arr}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ScrollView ref={scrollRef}>
            <View
              style={{
                padding: 1,
                margin: 5,
                width: windowWidth / 1,
                height: windowHeight / 4,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#6699FF',
                  borderWidth: 0.5,
                }}
                activeOpacity={0.5}
                onPress={() => navigation.navigate(item.id)}>
                <ImageBackground
                  source={{uri: item?.imagebackground}}
                  style={{
                    width: windowWidth / 2.1,
                    height: windowHeight / 4,
                    padding: 10,
                  }}>
                  <View style={{}}>
                    <Text style={styles.tuvungtext}>{item?.name}</Text>
                  </View>
                  <Text style={styles.sotu}>Số từ: {item?.sotu}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      />
      {loading ? (
        <OrientationLoadingOverlay
          visible={true}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          message="Loading..."
        />
      ) : null}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sotu: {
    fontSize: 23,
    // color: '#FFFF00',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 20,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tuvungtext: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    // color: '#0000DD',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 6,
    fontWeight: '800',
  },

  background: {
    backgroundColor: '#6699FF',
  },

  title: {
    color: '#FFF',
    marginLeft: 92,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },

  buttonImageIconStyle: {
    width: 300,
  },
});
