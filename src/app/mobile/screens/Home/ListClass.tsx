import * as React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';

export default function ListClass(props:any) {
    const { item, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.7}>
      <View style={styles.container}>
        <Text style={styles.title}>{item}</Text>
        <Ionicons name="create" size={24} align="center"/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingRight: 40,
    paddingLeft: 40,
    borderWidth: 0.4,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    marginBottom:16,
    shadowOffset: {width: 0 , height: 0},
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '700',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0 , height: 0},
  }
});

