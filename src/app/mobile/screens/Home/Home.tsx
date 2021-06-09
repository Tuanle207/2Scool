import * as React from 'react';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';
import ListClass from './ListClass';


export interface classes {
  id: number,
  name: string
}

export default class HomeScreen extends React.Component<{},any> {
  constructor(props:classes) {
    super(props);  
    this.state = {
      classes: [
        {id:1, name: "Lớp 10A1"},
        {id:2, name: "Lớp 10A2"},
        {id:3, name: "Lớp 10A3"},
        {id:4, name: "Lớp 10A4"},
        {id:5, name: "Lớp 10A5"},
        {id:6, name: "Lớp 10A6"},
        {id:7, name: "Lớp 10A7"},
        {id:8, name: "Lớp 10A8"},
        {id:9, name: "Lớp 10A9"},
        {id:10, name: "Lớp 10A10"},
        {id:11, name: "Lớp 10A11"},
        {id:12, name: "Lớp 10A12"},
      ],
    };
  }
  
  render() {
    const {classes} = this.state;
    const {navigation} = this.props;
    return (      
        <View style = {{backgroundColor:'#EEEEEE'}}>
          <ScrollView style={{marginTop: 16, paddingLeft: 24, paddingRight: 24}}>
            {classes.map((item:classes) => (
                  <ListClass key={item.id} item={item.name} onPress={() =>navigation.navigate('AddDisciplineReport')}/>
            ))}
          </ScrollView>
        </View>
    );
  }
  
}



