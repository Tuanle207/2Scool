import * as React from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
    name: 'Lớp 10A1',
    time: '7:10AM',
    countDiscipline: 3,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3d53ab28ba',
    name: 'Lớp 10A2',
    time: '7:20AM',
    countDiscipline: 43,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-ad53ab28ba',
    name: 'Lớp 10A3',
    time: '7:30AM',
    countDiscipline: 453,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53b28ba',
    name: 'Lớp 10A4',
    time: '7:40AM',
    countDiscipline: 63,
  },
  {
    id: 'bd7acbea-c1b1-46c2-d5-3ad53b28ba',
    name: 'Lớp 10A5',
    time: '7:40AM',
    countDiscipline: 63,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53bba',
    name: 'Lớp 10A6',
    time: '7:40AM',
    countDiscipline: 63,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53b2ba',
    name: 'Lớp 10A7',
    time: '7:40AM',
    countDiscipline: 63,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5328ba',
    name: 'Lớp 10A8',
    time: '7:40AM',
    countDiscipline: 63,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a53b28ba',
    name: 'Lớp 10A9',
    time: '7:40AM',
    countDiscipline: 63,
  },
];
export function CardClass(props:any) {
  const { list, onPress } = props;
return (
  <TouchableOpacity onPress={onPress}>
      <View style={styles.cardDiscipline}>
        <View style={styles.classDiscipline}>              
          <Text style={styles.titleClass}>{list.name}</Text>
        </View>
        <View style={styles.contentClassDiscipline}>
            <View style={styles.timeDiscipline}>
              <MaterialIcons name="access-alarm" size={24} color="black" />
              <Text style={{marginLeft: 8}}>{list.time}</Text>
            </View>
            <Text >Số lỗi vi phạm: {list.countDiscipline}</Text>
            
        </View>
        <View style={styles.more}>
          <Feather  name="more-horizontal" size={24} color="black" />
        </View>        
      </View>
  </TouchableOpacity>
);
}

export default class extends React.Component {
  render() {
      const {navigation} = this.props;
      return (
        <View style={styles.container}>
          <View style={{flex: 8}}>
            <FlatList style={styles.listDiscipline}
              data={DATA}
              renderItem = {({item}) => <CardClass list={item} onPress={() =>navigation.navigate('DetailReport')} /> }
              keyExtractor = {item => item.id}          
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center',}}>
          <TouchableOpacity
                style={styles.sentReportButtonStyle}
                activeOpacity = { .5 }
                onPress={()=> {
                  Alert.alert("Gửi phiếu vi phạm thành công");
                }}
            >
                <Text style={styles.textStyle}> GỬI PHIẾU VI PHẠM </Text>
                <Feather name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
          
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor:'#EEEEEE'
  },

  //list Card Class Discipline
  listDiscipline: {
    paddingTop: 16,
    flex: 1,  
    paddingLeft: 24,
    paddingRight: 24,         
    backgroundColor:'#EEEEEE'
  },
  cardDiscipline: {
    flexDirection: 'row',
    height: 68,
    marginBottom: 16,
    borderWidth: 0.4,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0 , height: 0},
  },
  titleClass: {
    textTransform: 'uppercase',
    fontWeight: '700',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0 , height: 0},
  },
  classDiscipline: {
    backgroundColor: '#BBBB',
    flex: 2,
    paddingTop: 24,
    paddingBottom: 24,    
    borderRadius: 28,
    alignItems: 'center',
  },
  contentClassDiscipline: {
    flex: 3,
    paddingLeft:24,
    paddingRight:24,
    justifyContent: 'space-evenly',
  },
  timeDiscipline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  more: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    margin:4,
    borderRadius: 24,
  },

  // Send Report
  sentReportButtonStyle: { 
    marginLeft: 24,
    marginRight: 24,
    paddingTop:12,
    paddingBottom:12,
    backgroundColor:'#2196F3',
    borderRadius:16,
    borderWidth: 1,
    borderColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },   
  textStyle:{
      color:'#fff',
      textAlign:'center',
      paddingRight: 16,
  },
});

