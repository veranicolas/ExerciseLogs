import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { HomeProps } from '../../types/NavigationTypes';
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';

const Home = ({navigation, user}:any) =>{

  const handleNavigation = () =>{
    navigation.navigate('ExerciseForm')
  }

  return(
    <View style={{flex:1, padding:StatusBar.currentHeight, backgroundColor:'white', justifyContent:'flex-start'}}>
        <Header navigation={navigation} user={user}/>
        <View style={{padding:20, height:300, justifyContent:'flex-start'}}>
          <Text style={{fontSize:58, fontWeight:'bold', color:'black'}}>Hello!</Text>
          <Text style={{color:'black', marginBottom:30}}>This is the homepage</Text>
          <CustomButton title="Add exercise log" handlePress={handleNavigation}/>
        </View>
        
        <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
    </View>
  )
}

const Homepage = ({navigation}:HomeProps) =>{

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
        user !== undefined ? <Home user={user.user} navigation={navigation} /> : <Text style={styles.loadingText}>Loading...</Text>
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

export { Homepage }