import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home = () =>{

    return(
      <View style={styles.mainContainer}>
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
  }
});

export { Home }