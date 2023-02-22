import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Button, Text, Image } from 'react-native'
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { useSelector } from 'react-redux'

const Profile = ({navigation}:any) =>{

    const { photo, name, email } = useSelector((state:any)=> state.user.value)

    const onPressLogout = async () => {
        try {
          await GoogleSignin.signOut();
          navigation.navigate('Login')
        } catch (error) {
          console.error(error);
        }
    };

    return(
        <View style={styles.mainContainer}>
            <View style={styles.userInfo}>
                <Image 
                    source={{uri:photo}} 
                    style={{height:170, width:170, borderRadius:100}}
                />
                <Text style={{fontSize:20, color:'black'}}>{name}</Text>
                <Text style={{fontSize:14, color:'grey'}}>{email}</Text>
            </View>
            
            <Button title='Logout' onPress={onPressLogout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1, 
        padding:StatusBar.currentHeight, 
        backgroundColor:'white', 
        justifyContent:'space-between'
    },
    userInfo:{
        height:300,
        padding:20, 
        justifyContent:'space-around', 
        alignItems:'center'
    }
});

export { Profile }