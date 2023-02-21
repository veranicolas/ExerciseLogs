import React from "react";
import { View, StyleSheet, StatusBar, Button } from 'react-native'
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Profile = ({navigation}:any) =>{

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

            <Button title='Logout' onPress={onPressLogout}/>
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

export { Profile }