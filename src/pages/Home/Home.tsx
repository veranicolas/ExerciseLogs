import React, { useEffect, useState } from 'react';
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { HomeProps } from '../../types/NavigationTypes';

const UserInfo = ({user, navigation}:any) =>{

  const { photo, givenName, familyName } = user

  useEffect(()=>{
    console.log(user)
  }, [])

  const onPressLogout = async () => {
    try {
      await GoogleSignin.signOut();
      // Remember to remove the user from your app's state as well
      navigation.navigate('Login')
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <View style={{width:350, height:400, backgroundColor:'white'}}>
      <Image 
        source={{uri:photo}} 
        style={{height:200, width:200}}
      />
      <Text>{givenName} {familyName}</Text>
      <StatusBar translucent backgroundColor='transparent'/>
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
        user !== undefined ? <UserInfo user={user.user} navigation={navigation} /> : <Text>Loading...</Text>
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
  }
});

export { Home }