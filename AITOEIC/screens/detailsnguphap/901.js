import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {Text, Header} from 'react-native-elements';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

export default function p901() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const HeadTable = ['ST', 'Động từ tobe', 'Động từ thường'];
  const DataTable = [
    ['Công thu', 'ate', 'last night.'],
    ['They', 'played', 'soccer', 'last week.'],
    ['The dog', 'runs', '', 'very fast.'],
    ['I', 'like', 'walking.', ''],
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container1}>
        <Text h3>Present simple</Text>

        <Text
          style={{
            marginTop: 15,
            fontSize: 17,
            alignItems: 'center',
            color: 'red',
            fontWeight: 'bold',
            padding: 5,
          }}>
          KHÁI NIỆM THÌ HIỆN TẠI ĐƠN
        </Text>
        <Text style={{marginTop: 15, fontSize: 17, padding: 5}}>
          Thì hiện tại đơn (Simple Present tense) là thì dùng để diễn đạt một
          hành động mang tính thường xuyên (regular action), theo thói quen
          (habitual action) hoặc hành động lặp đi lặp lại có tính quy luật, hoặc
          diễn tả chân lý và sự thật hiển nhiên.
        </Text>
        <Text style={{fontSize: 17, padding: 5, marginBottom: 10}}>Ví dụ:</Text>
        <Text>I walk to school every day. ( Tôi đi học hằng ngày)</Text>
        <Text>He often plays soccer. (Anh ấy thường xuyên chơi bóng đá)</Text>
        <Text
          style={{
            marginBottom: 15,
            marginTop: 15,
            fontSize: 17,
            alignItems: 'center',
            color: 'red',
            fontWeight: 'bold',
            padding: 5,
          }}>
          CÔNG THỨC THÌ HIỆN TẠI ĐƠN
        </Text>
        <Text h4> Khẳng định:</Text>
        <Image
          source={require('./../../assets/nguphapimage/khangdinh.png')}
          resizeMode="contain"
          style={{
            width: windowWidth / 1.1,
            height: 300,
            borderRadius: 10,
            marginTop: 9,
          }}
        />
        <Text h4> Phủ định:</Text>
        <Image
          source={require('./../../assets/nguphapimage/phudinh.png')}
          resizeMode="contain"
          style={{
            width: windowWidth / 1.1,
            borderRadius: 10,
          }}
        />
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#3333FF'}}>
          Chủ ngữ là chủ thể của hành động trong câu, thường đứng trước động từ
          (verb). Chủ ngữ thường là một danh từ (noun) hoặc một ngữ danh từ
          (noun phrase - một nhóm từ kết thúc bằng một danh từ, trong trường hợp
          này ngữ danh từ không được bắt đầu bằng một giới từ). Chủ ngữ thường
          đứng ở đầu câu và quyết định việc chia động từ.
        </Text>
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#FF0066'}}>
          Chú ý rằng mọi câu trong tiếng Anh đều có chủ ngữ (Trong câu mệnh
          lệnh, chủ ngữ được ngầm hiểu là người nghe. Ví dụ: "Don't move!" =
          Đứng im!).
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 17,
            color: '#000044',
          }}>
          <Text style={{textDecorationLine: 'underline'}}> Milk </Text>is
          delicious. (một danh từ)
          {'\n'}
          <Text style={{textDecorationLine: 'underline'}}> That new </Text>,
          <Text style={{textDecorationLine: 'underline'}}> red car </Text> is
          mine. (một ngữ danh từ)
        </Text>
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#FF0066'}}>
          Đôi khi câu không có chủ ngữ thật sự, trong trường hợp đó,
          <Text style={{fontStyle: 'italic'}}> It </Text> hoặc
          <Text style={{fontStyle: 'italic'}}> There </Text>đóng vai trò chủ ngữ
          giả.
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 17,
            color: '#000044',
          }}>
          <Text style={{textDecorationLine: 'underline'}}>It</Text> is a nice
          day today.
          {'\n'}
          <Text style={{textDecorationLine: 'underline'}}>There </Text> are a
          fire in that building.{'\n'}
          <Text style={{textDecorationLine: 'underline'}}>There </Text> were
          many students in the room.{'\n'}
          <Text style={{textDecorationLine: 'underline'}}>It </Text> is the fact
          that the earth goes around the sun.
        </Text>
        <Text></Text>
        <Text h4>1.2 Verb (động từ):</Text>
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#3333FF'}}>
          Động từ là từ chỉ hành động hoặc trạng thái của chủ ngữ, Mọi câu đều
          phải có động từ. Nó có thể là một từ đơn hoặc một ngữ động từ. Ngữ
          động từ (verb phrase) là một nhóm từ gồm một hoặc nhiều trợ động từ
          (auxiliary) là một động từ chính.
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 17,
            color: '#000044',
          }}>
          I <Text style={{textDecorationLine: 'underline'}}> Love </Text> you.
          (chỉ hành động){'\n'}
          Chilli <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            is{' '}
          </Text>{' '}
          hot. (chỉ trạng thái){'\n'}I{' '}
          <Text style={{textDecorationLine: 'underline'}}> have seen </Text> the
          movie three time before.{'\n'}
          (auxiliary: have; main verb:seen){'\n'}I{' '}
          <Text style={{textDecorationLine: 'underline'}}> am going </Text> to
          Sai Gon tomorrow.{'\n'}
          (auxiliary: am; main verb:going)
        </Text>
        <Text></Text>
        <Text h4>1.3 Complement (vị ngữ):</Text>
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#3333FF'}}>
          Vị ngữ là từ hoặc cụm từ chỉ đối tượng tác động của chủ ngữ. Cũng
          giống như chủ ngữ, vị ngữ thường là danh từ hoặc ngữ danh từ hoặc ngữ
          danh từ không bắt đầu bằng giới từ, tuy nhiên vị ngữ thường đứng sau
          động từ. Không phải câu nào cũng có complement. Vị ngữ trả lời cho câu
          hỏi What? hoặc Whom?
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 17,
            color: '#000044',
          }}>
          John bought{' '}
          <Text style={{textDecorationLine: 'underline'}}> a car </Text>{' '}
          yesterday. (What did John buy?){'\n'}
          Jill wants to drink{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            some water{' '}
          </Text>{' '}
          hot. (what does he want to drink?){'\n'}
          She saw <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            John{' '}
          </Text>{' '}
          at the movie last night. (Whom did she see at the movie?){'\n'}
          (auxiliary: have; main verb:seen){'\n'}
        </Text>
        <Text></Text>
        <Text h4>1.4 Modifier (trạng từ):</Text>
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#3333FF'}}>
          Trạng từ là từ hoặc cụm từ chỉ thời gian, địa điểm hoặc cách thức của
          hành động. Không phải câu nào cũng có trạng từ. Chúng thường là các
          cụm giới từ (prepositional phrase), phó từ (adverb) hoặc một cụm phó
          từ (adverbial phrase). Chúng trả lời cho câu hỏi When? Where? hoặc
          How? Một cụm giới từ là một cụm từ bắt đầu bằng một giới từ và kết
          thúc bằng một danh từ (VD: in the morning, on the table,...). Nếu có
          nhiều trạng từ trong câu thì trạng từ chỉ thời gian thường đi sau
          cùng.
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 17,
            color: '#000044',
          }}>
          John bought a book{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            at the bookstore.{' '}
          </Text>{' '}
          (Where did John buy a book?){'\n'}
          She saw John{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            at the movie{' '}
          </Text>{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            last night.
          </Text>{' '}
          (When did she see John? When did she see him?){'\n'}
          She drives{' '}
          <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            very fast.
          </Text>{' '}
          (How does she drive?){'\n'}
        </Text>
        <Text
          style={{marginTop: 15, fontSize: 18, padding: 5, color: '#FF0066'}}>
          Chú ý rằng trạng từ thường đi sau vị ngữ nhưng không nhất thiết. Tuy
          nhiên trạng từ là cụm giới từ không được nằm giữa động từ và vị ngữ.
        </Text>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 17,
            color: '#000044',
          }}>
          She <Text style={{textDecorationLine: 'underline'}}> drove </Text>on
          the street
          <Text style={{textDecorationLine: 'underline'}}> her new car. </Text>
          (Sai){'\n'}
          She <Text style={{textDecorationLine: 'underline'}}>
            {' '}
            drove{' '}
          </Text>{' '}
          <Text style={{textDecorationLine: 'underline'}}> her new car</Text>on
          the street. (Đúng){'\n'}
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container1: {
    flex: 1,
    margin: 15,
    backgroundColor: '#FFF',
  },
  HeadStyle: {
    height: 70,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  TableText: {
    margin: 10,
    fontWeight: 'bold',
    color: '#000044',
  },
  TableTexts: {
    margin: 10,
    fontSize: 15,
    color: '#000044',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
