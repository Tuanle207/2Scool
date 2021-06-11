import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ClassesService } from '../../common/api';
import { Text, View } from '../../components/Themed';
import ListClass from './ListClass';
import {Class} from '../../common/interfaces';


export default function Home() {
    const [classes1, setClasses] = React.useState<Class.ClassForHomeDto[]>([]);
    const navigation = useNavigation();
    React.useEffect(() => {
      ClassesService.getClasses().then((data: any) => {
        const items = data.items as [];
        const result = items.map((el: Class.ClassForHomeDto) => ({
          id: el.id,
          name: el.name
        }));
        setClasses(result);
      });
    }, [])

    return (      
        <View style = {{backgroundColor:'#EEEEEE'}}>
          <ScrollView style={{marginTop: 16, paddingLeft: 24, paddingRight: 24}}>
            {classes1.map((item:any) => (
                  <ListClass key={item.id} item={item.name} onPress={() =>{navigation.navigate('AddDisciplineReport', {classId: item.id})}}/>
            ))}
          </ScrollView>
        </View>
    );
  }
