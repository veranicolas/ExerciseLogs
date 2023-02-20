import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Button, Dimensions, NativeModules, TextInput } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { HomeProps } from '../../types/NavigationTypes';
import { Header } from '../../components/Header';
import { ExerciseForm } from '../ExerciseForm/ExerciseForm';

const UserInfo = ({user, navigation}:any) =>{

  useEffect(()=>{
    console.log(user)
  }, [])

  const onPressLogout = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.navigate('Login')
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <View style={{flex:1, padding:StatusBar.currentHeight, backgroundColor:'white', justifyContent:'space-between'}}>
      <Header user={user}/>
      <StatusBar translucent backgroundColor='grey' barStyle={'dark-content'}/>
      <ExerciseForm />
      <Button title='Logout' onPress={onPressLogout}/>
    </View>
  )
}

const Home = ({navigation}:HomeProps) =>{

  const [user, setUser] = useState<any>(undefined)

  useEffect(()=>{
    const getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      setUser({ ...currentUser });
    };

    getCurrentUser()
  }, [])
  
  return(
    <View style={styles.mainContainer}>
      
      {
        user !== undefined ? <UserInfo user={user.user} navigation={navigation} /> : <Text style={styles.loadingText}>Loading...</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1, 
    backgroundColor:'#0B3954', 
    height:'100%', 
    width:'100%', 
    justifyContent:'center', 
    alignItems:'center'
  },
  loadingText:{
    height:70, 
    width:150, 
    backgroundColor:'white', 
    textAlign:'center', 
    textAlignVertical:'center', 
    borderRadius:15
  }
});

export { Home }