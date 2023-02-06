import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

const Login = () =>{

    return(
      <View style={styles.mainContainer}>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>Welcome to Exercise Logs</Text>
          <Text style={{color:'black', marginBottom:20}}>Start tracking your lift records today!</Text>
          <GoogleSigninButton size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Dark}/>
        </View>
        <StatusBar translucent backgroundColor='transparent'/>
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
  welcomeBox:{
    height:300, 
    width:300, 
    backgroundColor:'white', 
    padding:30,
    borderRadius:12
  },
  welcomeTitle:{
    fontSize:20, 
    color:'black', 
    fontWeight:'700',
    marginBottom:15
  },
});

export { Login }