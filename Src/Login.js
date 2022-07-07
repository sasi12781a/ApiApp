import React,{ useState,useEffect } from 'react';
import {
  View,
  Button,
  TextInput,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LogIn=()=>{
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  useEffect(()=>{
    SetData()
  },[])
  const SetData= async()=>{
    try {
        await AsyncStorage.setItem('user',userName)
      } catch (e) {
        console.log(e.error)
      }
  }

  return(
    <View style={{justifyContent:'center',alignItems:"center",flex:1}}>
      <View style={{height:windowHeight*0.1,width:windowWidth*0.8,backgroundColor:'white',margin:20,borderWidth:3}}>
        <TextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="userName"
        keyboardType="ascii-capable"
        autoCompleteType="off"
        />
      </View>
      <View style={{height:windowHeight*0.1,width:windowWidth*0.8,backgroundColor:'white',margin:20,borderWidth:3}}>
        <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        keyboardType="ascii-capable"
        autoCompleteType="off"
        secureTextEntry={true}
        />
      </View>
      <View>
        <Button title='LogIn' onPress={SetData}>
        </Button>
      </View>
    </View>
  )
}
export default LogIn;
