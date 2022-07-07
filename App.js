import React,{ useState,useEffect } from 'react';
import {
  View,Button,Dimensions,TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Src/Home';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App= ()=>{
  const [user, setUser] = useState();


  const LogIn=()=>{
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState('');

    useEffect(() => {
      firstLoad()
    }, []);


    const firstLoad = async () => {
      try {
        const savedNickname = await AsyncStorage.getItem("user");
        setUser(savedNickname);
      } catch (err) {
        console.log(err);
      }
    };

    const SetData= async()=>{
      try {
          await AsyncStorage.setItem('user',userName)
        } catch (e) {
          console.log(e.error)
        }
    }
  
    return(
      <View style={{justifyContent:'center',alignItems:"center",flex:1}}>
        <View style={{height:windowHeight*0.07,width:windowWidth*0.8,backgroundColor:'white',margin:20,borderWidth:3}}>
          <TextInput
          value={userName}
          onChangeText={setUserName}
          placeholder="userName"
          keyboardType="ascii-capable"
          autoCompleteType="off"
          />
        </View>
        <View style={{height:windowHeight*0.07,width:windowWidth*0.8,backgroundColor:'white',margin:20,borderWidth:3}}>
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
          <Button title='LogIn' onPress={()=>{SetData(),firstLoad()}}>
          </Button>
        </View>
      </View>
    )
  }

  

  const removeNickname = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser();
    } catch (err) {
      console.log(err);
    }
  };


  if (user){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Home/>
        <View style={{margin:30}}>
          <Button title='SignOut' onPress={removeNickname}>
          </Button>
        </View>
      </View>
    ) 
  }
  return <LogIn/>
}

export default App;
