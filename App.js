import React,{ useState,useEffect } from 'react';
import {
  View,Text,Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogIn from './Src/Login';
import Home from './Src/Home';


const App= ()=>{
  userId = AsyncStorage.getItem('user') || 'none';
  
  const deleteUserId = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.log(error.message);
    }
  }

  if (userId){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Home/>
        <View>
          <Button title='SignOut' onPress={deleteUserId}>

          </Button>
        </View>
      </View>
    ) 
  }
  return <LogIn/>
}

export default App;
