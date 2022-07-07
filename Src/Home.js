import React,{useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,Text,} from 'react-native';

const Home=(props)=>{
  return(
    <View style={{justifyContent:'center',alignItems:"center",flex:1}}>
      <Text style={{margin:20}}>
        {props.name}
      </Text>
    </View>
  )
}
export default Home;
