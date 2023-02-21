import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Button, Dimensions, Pressable } from 'react-native';

const Header = ({user, navigation}:any) =>{

    const { photo, givenName, familyName } = user

    const handleRedirectProfile = () =>{
      navigation.navigate('Profile')
    }
  
    return(
      <View style={{height:80, width:Dimensions.get('screen').width, flexDirection:'row', padding:5, borderBottomWidth:1, borderColor:'grey'}}>
        <Pressable onPress={handleRedirectProfile}>
          <Image 
            source={{uri:photo}} 
            style={{height:65, width:65, borderRadius:50}}
          />
        </Pressable>
        <Text style={{fontSize:18, textAlignVertical:'center', color:'black', marginLeft:20}}>{givenName} {familyName}</Text>
      </View>
    )
  }

export { Header }