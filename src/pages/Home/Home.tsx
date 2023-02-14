import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Button, Dimensions } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { HomeProps } from '../../types/NavigationTypes';

const Header = ({user}:any) =>{

  const { photo, givenName, familyName } = user

  return(
    <View style={{height:80, width:Dimensions.get('screen').width, flexDirection:'row', padding:5, borderBottomWidth:1, borderColor:'grey'}}>
      <Image 
        source={{uri:photo}} 
        style={{height:65, width:65, borderRadius:50}}
      />
      <Text style={{fontSize:18, textAlignVertical:'center', color:'black', marginLeft:20}}>{givenName} {familyName}</Text>
    </View>
  )
}

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