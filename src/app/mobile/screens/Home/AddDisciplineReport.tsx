import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, Button, Picker, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown, GroupDropdown, MultiselectDropdown } from 'sharingan-rn-modal-dropdown';
import { Text, View } from '../../components/Themed';
export const dtNameTypeDiscipline = [
  {
    value: '1',
    label: 'Vi phạm lớp'
  },
  {
    value: '2',
    label: 'Vi phạm học sinh'
  },
];
export const dtNameDiscipline = [
  {
    value: '1',
    label: 'Không có phù hiệu'
  },
  {
    value: '2',
    label: 'Chậm học'
  },
  {
    value: '3',
    label: 'Không trực nhật'
  },
  {
    value: '4',
    label: 'Đánh nhau'
  },
  {
    value: '5',
    label: 'Tập trung muộn'
  },
];

export const dtNamePupil = [
  {
    value: '1',
    label: 'Nguyễn Thanh Hoa'
  },
  {
    value: '2',
    label: 'Lê Anh Tuấn'
  },
  {
    value: '3',
    label: 'Trang'
  },
  {
    value: '4',
    label: 'Nguyễn Nhật Chiêu'
  },
  {
    value: '5',
    label: 'Lưu Văn Bình'
  },
];


export default function AddDisciplineReport() {
  const [listPupil, setListPupil] = React.useState<string[]>([]);
  const [nameTypeDiscipline, setNameTypeDiscipline] = React.useState('');
  const [nameDiscipline, setNameDiscipline] = React.useState('');
  const onChangeListPupil = (value: string[]) => {
    setListPupil(value);
  };
  const onChangeNameTypeDiscipline = (value: string) => {
    setNameTypeDiscipline(value);
  };
  const onChangeNameDiscipline = (value: string) => {
    setNameDiscipline(value);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE'
      }}
    >
        
        <View style={{flex: 1, backgroundColor:'#EEEEEE'}}>
            <TouchableOpacity
              style={styles.AddClassDisciplineButtonStyle}
              activeOpacity = { .5 }
              
              onPress={()=> {
                Alert.alert("Hoàn thành chấm lớp 10A1");
              }}
            >
              <Text style={{color:'#fff', textAlign:'center'}}> XONG </Text>
              <Ionicons name="checkmark" size={24} color="white" align="center"/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 7, backgroundColor:'#EEEEEE'}}>
          <View style={styles.dropDown}>
            <Dropdown
              label="Loại vi phạm"
              underlineColor = "white"
              floating
              borderRadius = {16}
              data={dtNameTypeDiscipline}
              value={nameTypeDiscipline}
              onChange={onChangeNameTypeDiscipline}
            />
          </View>
          <View style={styles.dropDown}>
            <Dropdown
              label="Tên vi phạm"
              underlineColor = "white"
              floating
              borderRadius = {16}
              data={dtNameDiscipline}
              enableSearch
              value={nameDiscipline}
              onChange={onChangeNameDiscipline}
            />
          </View>
          <View style={styles.multiSelectDropdown}>
            <MultiselectDropdown 
              label="Danh sách học sinh vi phạm"
              underlineColor = "white"
              floating
              borderRadius = {16}
              data={dtNamePupil}
              enableSearch
              searchPlaceholder = "Tìm kiếm học sinh"
              chipType="outlined"
              value={listPupil}
              onChange={onChangeListPupil}
            />
          </View>
        </View>     
      <View style={{flex: 1, justifyContent: 'center',}}>
        <TouchableOpacity
          style={styles.AddDisciplineButtonStyle}
          activeOpacity = { .5 }
          onPress={()=> {
            Alert.alert("Thêm vi phạm thành công");
          }}
        >
          <Text style={styles.btnTextStyle}> THÊM VI PHẠM </Text>
          <Ionicons name="add" size={24} color="white" align="center"/>
        </TouchableOpacity>
      </View>      
    </View>
    );
  }
  

  const styles = StyleSheet.create({
    
    //btn done
    AddClassDisciplineButtonStyle: { 
      marginTop:10,
      paddingTop:4,
      paddingBottom:4,
      paddingRight: 8, 
      paddingLeft:8,
      marginRight: 12,
      backgroundColor:'#006633',
      alignContent: 'flex-end',
      borderRadius:32,
      borderWidth: 1,
      borderColor: '#fff',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    multiSelectDropdown : {
      borderRadius: 16,
      borderWidth: 0.4,
      marginLeft: 28,
      marginRight: 28,  
      marginBottom: 28,
      flex: 1,      
    },
    dropDown: {
      borderRadius: 16,
      borderWidth: 0.4,
      marginLeft: 28,
      marginRight: 28,  
      marginBottom: 28,
      flex: 0.5,
    },
    AddDisciplineButtonStyle: { 
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
      justifyContent: 'center'
    },   
    btnTextStyle:{
        color:'#fff',
        textAlign:'center',
        paddingRight: 16,
    },
  });