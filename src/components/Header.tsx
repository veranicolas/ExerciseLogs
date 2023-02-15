import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Button, Dimensions } from 'react-native';

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

export { Header }