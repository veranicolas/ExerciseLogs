import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Button, Dimensions, Pressable } from 'react-native';

import { useSelector } from 'react-redux'

const Header = ({navigation}:any) =>{

  const { photo } = useSelector((state:any)=> state.user.value)

  const handleRedirectProfile = () =>{
    navigation.navigate('Profile')
  }
  
  return(
    <View style={styles.headerContainer}>
      <Pressable onPress={handleRedirectProfile}>
        <Image 
          source={{uri:photo}} 
          style={{height:40, width:40, borderRadius:50}}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    height:60, 
    width:Dimensions.get('screen').width, 
    flexDirection:'row', 
    paddingHorizontal:20, 
    borderBottomWidth:1, 
    borderColor:'#e8e8e8',
    alignItems:'center'
  }
})

export { Header }